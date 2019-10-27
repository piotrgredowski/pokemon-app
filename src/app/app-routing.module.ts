import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeViewComponent } from './views/home-view/home-view.component';
import { PokemonViewComponent } from './views/pokemon-view/pokemon-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: ':id', component: PokemonViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
