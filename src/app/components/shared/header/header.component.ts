import { Component } from '@angular/core';

@Component({
    selector: 'app-header-comp',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.styl']
})

export class HeaderComponent {
    events: string[] = [];
    menuOpen = false;
    menus: any[] = [
        {
            'name': 'Visualizador',
            'link': 'map'
        },
        {
            'name': 'Administrar Capas',
            'link': 'admin'
        },
        {
            'name': 'Información',
            'link': 'info'
        }
    ];

    constructor() {
    }

    toggleMobileMenu () {
        this.menuOpen = !this.menuOpen;
        console.log(this.menuOpen);
    }
}
