import { Component, OnInit } from '@angular/core';
import { LayerService } from '../../services/LayerService/layerService.service';

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

    constructor( private _layerService: LayerService ) {
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
            console.log(this.map.getLayer(this.layerDeleteID));
            // this.map.removeLayer(this.layerDelete);
            // this.map.removeSource(this.layerDelete);
        }
    }
}
