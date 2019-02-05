import { Component } from '@angular/core';

import { Layer } from '../../classes/Layer/layer.component';

@Component({
 selector: 'app-add-layer-form-comp',
 templateUrl: './add-layer-form.component.html',
 styleUrls: ['./add-layer-form.component.styl']
})
export class AddLayerFormComponent {

    types = [
        {
            'name': 'Simbolo',
            'icon': './assets/icons/point.png',
            'val': 'symbol',
        }, {
            'name': 'Linea',
            'icon': './assets/icons/line.png',
            'val': 'line',
        }, {
            'name': 'Poligono',
            'icon': './assets/icons/polygon.png',
            'val': 'polygon',
        }
    ];

    submitted = false;

    model = new Layer('','line', null);

    onSubmit() {
        this.submitted = true;
    }
}
