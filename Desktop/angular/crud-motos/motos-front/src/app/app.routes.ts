import { Routes } from '@angular/router';

import { IndexComponent } from './pages/motos/index/index';
import { CreateComponent } from './pages/motos/create/create';
import { EditComponent } from './pages/motos/edit/edit';

export const routes: Routes = [
  { path: '', redirectTo: 'motos', pathMatch: 'full' },
  { path: 'motos', component: IndexComponent },
  { path: 'motos/create', component: CreateComponent },
  { path: 'motos/edit/:id', component: EditComponent }
];
