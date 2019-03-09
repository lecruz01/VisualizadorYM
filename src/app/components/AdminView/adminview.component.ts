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
    fileToUpload: any;
    fileExtError: boolean;

    constructor(
        private _layerService: LayerService,
        public _scnSz: ScreenDetectorService,
        private formBuilder: FormBuilder,
        private http: HttpClient ) {
            this.layers = this._layerService.getLayers();
            let i = 0;
            this.layers.forEach(element => {
                this.btnsShow[i] = 0;
                i++;
            });
     }

    ngOnInit(): void {
        // @ts-ignore
        if ( mapboxgl.supported() ) {
            // @ts-ignore
            this.map = new mapboxgl.Map({
                container: 'map',
                style: this.type,
                center: this.coords,
                zoom: 11
            });
            // @ts-ignore
            this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');
        } else {
            document.getElementById('map').innerHTML = '<h2>Tu navegador no soporta MapBox GL. Por favor utiliza un dispositivo diferente</h2>';
        }

        bsCustomFileInput.init();
        this.formCapa = this.formBuilder.group({
            nombreCapa: ['', Validators.required],
            fileCapa: [null, Validators.required],
            tipoCapa: ['Linea', Validators.required],
            colorCapa: ['#ffffff', Validators.required]
        });
     }

    get form() { return this.formCapa.controls; }

    getColor(value) {
        this.formCapa.patchValue({colorCapa: value});
    }

    changeForm() {
        this.formSubmitted = false;
    }

    prepareFile(event) {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            const file = fileList[0];
            const fext = (file.name).split('.');
            if (fext[1] === 'geojson') {
                this.fileExtError = false;
                this.fileToUpload = file;
            } else {
                this.fileExtError = true;
            }
        }
    }

    onSubmitFormCreate() {
        this.formSubmitted = true;
        if (this.formCapa.invalid) {
            return;
        } else {
            this._layerService.createLayer(this.formCapa.value, this.fileToUpload).subscribe(
                data => {
                    // @ts-ignore
                    this.map.addLayer(data.layerData.layer);
                },
                error => console.log(error)
            );
        }
    }

    clearForm() {
        this.formCapa.reset();
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
