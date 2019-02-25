import { Component, OnInit } from '@angular/core';
import { LayerService } from '../../services/LayerService/layerService.service';
import { ScreenDetectorService } from '../../services/screenService/screen.service';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import bsCustomFileInput from 'bs-custom-file-input';

@Component({
    selector: 'app-admin',
    templateUrl: './adminview.component.html',
    styleUrls: ['./adminview.component.styl']
})
export class AdminViewComponent implements OnInit {

    map: any = undefined;
    coords: number[] = [-99.58, 19.297166];
    type = 'mapbox://styles/mapbox/streets-v9';
    layers = [];
    btnsShow: number[] = [];
    layerDelete = undefined;
    layerDeleteID = -1;

    /**
     * Variables form creacion de capa
     */
    formSubmitted = false;
    formCapa: FormGroup;
    geoJsonFile: any;
    // nombreCapa = new FormControl('');
    // tipoCapa = new FormControl('Linea');
    // fileCapa = new FormControl('');

    constructor( private _layerService: LayerService, public _scnSz: ScreenDetectorService, private formBuilder: FormBuilder, private http: HttpClient ) {
        this.layers = this._layerService.getLayers();
        let i = 0;
        this.layers.forEach(element => {
            this.btnsShow[i] = 0;
            i++;
        });
     }

    ngOnInit(): void {
        // @ts-ignore
        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.type,
            center: this.coords,
            zoom: 11
        });
        bsCustomFileInput.init();
        this.formCapa = this.formBuilder.group({
            nombreCapa: ['', Validators.required],
            fileCapa: ['', Validators.required],
            tipoCapa: ['Linea', Validators.required],
        });
     }

    get form() { return this.formCapa.controls; }

    changeForm() {
        this.formSubmitted = false;
    }

    prepareFile(event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            // console.log('Form Data: ' + formData);
            // this._layerService.createLayer(formData);
            // console.log(formData);
            let headers = new HttpHeaders();
            /** In Angular 5, including the header Content-Type can invalidate your request */
            headers.append('enctype', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            this.http.post('http://localhost:8001/api/layers', formData, { headers : headers } )
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            );
        }
    }

    onSubmitFormCreate(event) {
        this.formSubmitted = true;
        // Revisar si el formulario es valido
        if (this.formCapa.invalid) {
            return;
        } else {
            console.log(this.formCapa.value);
            // console.log(this.nombreCapa.value);
            // console.log(this.tipoCapa.value);
            // console.log(this.fileCapa.value);
        }
    }

    verCapa(index: number) {
        this.btnsShow[index] = 1;
        this.map.addLayer(this.layers[index]);
    }

    ocultarCapa(index: number, layerID) {
        this.btnsShow[index] = 0;
        this.map.removeLayer(layerID);
        this.map.removeSource(layerID);
    }

    cargarCapaAEliminar(index: number, id) {
        this.layerDelete = this.map.getLayer(id);
        this.layerDeleteID = id;
    }

    eliminarCapa() {
        if (this.map.getLayer(this.layerDeleteID)) {
            // console.log(this.map.getLayer(this.layerDeleteID));
            this.map.removeLayer(this.layerDelete);
            this.map.removeSource(this.layerDelete);
        }
    }
}
