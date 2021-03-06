import { Component, OnInit } from '@angular/core';
import { LayerService } from './../../services/LayerService/layerService.service';

@Component({
    selector: 'app-mapview-comp',
    templateUrl: './mapview.component.html',
    styleUrls: ['./mapview.component.styl']
})
export class MapViewComponent implements OnInit {
    map = undefined;
    coords: number[] = [-99.58, 19.297166];
    type = 'mapbox://styles/mapbox/streets-v9';

    layers: any[] = [];


    constructor( private _layerService: LayerService ) {
        this.layers = this._layerService.getLayers();
    }

    ngOnInit(): void {
        this.loadMap();
    }

    loadMap() {
        // @ts-ignore
        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.type,
            center: this.coords,
            zoom: 11
        });
        this.map.on('load', () => {
            this.layers.forEach( (value) => {
                // console.log(value);
                this.map.addLayer(value);
            });
        });
        console.log('Mapa cargado');
    }
}
