import { Injectable } from '@angular/core';

@Injectable()
export class ScreenDetectorService {

    private mobile = false;
    private tablet = false;
    private desktop = false;

    constructor() {
        window.addEventListener('resize', () => {
            this.detectSize();
        });
        this.detectSize();
    }

    private detectSize() {
        this.mobile = false;
        this.tablet = false;
        this.desktop = false;
        if ( window.innerWidth < 768  ) {
            this.mobile = true;
        } else if ( window.innerWidth < 992 ) {
            this.tablet  = true;
        } else {
            this.desktop = true;
        }
    }

    isMobile() {
        return this.mobile;
    }

    isTablet() {
        return this.tablet;
    }

    isDesktop() {
        return this.desktop;
    }

}
