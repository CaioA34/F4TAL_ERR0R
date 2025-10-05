import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { MapComponent } from './map/map';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'map', component: MapComponent },
  { path: 'map-2', component: MapComponent }, // Apontando para o mesmo mapa
  { path: 'map-3', component: MapComponent }, // por enquanto
  { path: '**', redirectTo: '' }
];
