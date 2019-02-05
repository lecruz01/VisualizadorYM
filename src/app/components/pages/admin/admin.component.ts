import { Component, OnInit } from '@angular/core';
import { LayerService } from './../../../services/layerService/layer.service';

@Component({
    selector: 'app-layer-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.styl']
})
export class AdminComponent implements OnInit {

    layers: any[] = [];

    constructor( private _layerService: LayerService ) {}

    ngOnInit(): void {
        this.layers = this._layerService.getLayers();
    }
}
