
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Servicios
 */
import { LayerService } from './services/layerService/layer.service';

/**
 * Importar Rutas
 */
import { APP_ROUTING } from './app.routes';

/**
 * Componentes
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AddLayerFormComponent } from './components/forms/addLayerForm/add-layer-form.component';

/**
 * Paginas
 */
import { MapComponent } from './components/pages/map/map.component';
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
 * Material Design
 */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatExpansionModule, MatButtonModule, MatCardModule, MatToolbarModule, MatSidenavModule } from '@angular/material';


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
    APP_ROUTING,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule
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
