import { Component } from '@angular/core';

@Component({
    selector: 'app-header-comp',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.styl']
})

export class HeaderComponent {
    title =  'Visualizador de Capas';
    menuOpen = 0;

    constructor() {
    }

    openMobileMenu () {
        (this.menuOpen === 1) ? this.menuOpen = 0 : this.menuOpen = 1;
        console.log(this.menuOpen);
    }
}
