import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

/**
 * Rutas
 */
import { APP_ROUTING } from './app.routes';
/**
 * Servicios
 */
import { LayerService } from './services/LayerService/layerService.service';
import { ScreenDetectorService } from './services/screenService/screen.service';
import { HttpClientModule } from '@angular/common/http';

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
    APP_ROUTING,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ScreenDetectorService,
    LayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
