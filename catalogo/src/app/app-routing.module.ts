import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ActoresAddComponent,
  ActoresComponent,
  ActoresComponentes,
  ActoresEditComponent,
  ActoresViewComponent,
} from './actores/actores.component';
import { HomeComponent } from './main/home/home.component';
// import { PeliculaAddComponent, PeliculaComponent, PeliculaEditComponent, PeliculaViewComponent } from './pelicula/componente.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent, data: { pageTitle: 'Inicio' } },
  {
    path: 'actores',
    children: [
      { path: 'edit', component: ActoresEditComponent },
      { path: '', component: ActoresComponent },
      { path: 'add', component: ActoresAddComponent },
      { path: ':id', component: ActoresViewComponent },
      { path: ':id/edit', component: ActoresEditComponent },
    ],
  },
  // {
  //   path: 'peliculas',
  //   children: [
  //     { path: 'edit', component: PeliculaEditComponent },
  //     { path: '', component: PeliculaComponent },
  //     { path: 'add', component: PeliculaAddComponent },
  //     { path: ':id', component: PeliculaViewComponent },
  //     { path: ':id/edit', component: PeliculaEditComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
