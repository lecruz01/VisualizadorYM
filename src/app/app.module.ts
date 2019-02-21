import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/**
 * Rutas
 */
import { APP_ROUTING } from './app.routes';
/**
 * Servicios
 */
import { LayerService } from './services/LayerService/layerService.service';
import { ScreenDetectorService } from './services/screenService/screen.service';

/**
 * Componentes
 */
import { HeaderComponent } from './components/shared/header/header.component';
import { MapViewComponent } from './components/MapView/mapview.component';
import { AdminViewComponent } from './components/AdminView/adminview.component';
import { AboutViewComponent } from './components/AboutView/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapViewComponent,
    AdminViewComponent,
    AboutViewComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ScreenDetectorService,
    LayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
