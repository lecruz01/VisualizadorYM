import { RouterModule, Routes } from '@angular/router';

/**
 * Importar componentes
 */
import { MapViewComponent } from './components/MapView/mapview.component';
import { AdminViewComponent } from './components/AdminView/adminview.component';

const APP_ROUTES: Routes = [
    { path: 'admin', component: AdminViewComponent },
    { path: 'map', component: MapViewComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'map' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);