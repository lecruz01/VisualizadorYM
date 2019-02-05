import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Componentes
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddLayerFormComponent } from './components/forms/addLayerForm/add-layer-form.component';

/**
 * Paginas
 */
import { MapComponent } from './components/map/map.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { InfoComponent } from './components/pages/info/info.component';
/**
 * Importar iconos utilizados
 */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

/**
 * Servicios
 */
import { LayerService } from './services/layerService/layer.service';

/**
 * Importar Rutas
 */
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    AdminComponent,
    InfoComponent,
    AddLayerFormComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    LayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faBars);
    library.add(faChevronDown);
  }
 }
