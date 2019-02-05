import { Component, OnInit } from '@angular/core';
import { LayerService } from './../../services/layerService/layer.service';

@Component({
    selector: 'app-map-comp',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.styl']
})

export class MapComponent implements OnInit {
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
        mapboxgl.accessToken = 'pk.eyJ1IjoibGVjcnV6MDEiLCJhIjoiY2pyY2t1aXJiMWV3bTQ0bndiZHFtZnd3dCJ9.T_AWHGpxthQg8DRhzuKTGg';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.type,
            center: this.coords,
            zoom: 11
        });
        this.map.on('load', () => {
            this.layers.forEach( (value) => {
                console.log(value);
                this.map.addLayer(value);
            });
        });
        console.log('Mapa cargado');
    }
}
