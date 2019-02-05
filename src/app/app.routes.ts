import { RouterModule, Routes } from '@angular/router';

/**
 * Importar componentes
 */
import { MapComponent } from './components/map/map.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { InfoComponent } from './components/pages/info/info.component';

const APP_ROUTES: Routes = [
    // { path: 'visualizador', component: Component },
    // { path: 'admin', component: Component },
    { path: 'map', component: MapComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'info', component: InfoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'map' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
