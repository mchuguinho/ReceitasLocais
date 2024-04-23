import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'receitas',
    loadChildren: () => import('./receitas/receitas.module').then( m => m.ReceitasPageModule)
  },
  {
    path: 'viana',
    loadChildren: () => import('./viana/viana.module').then( m => m.VianaPageModule)
  },
  {
    path: 'torta',
    loadChildren: () => import('./torta/torta.module').then( m => m.TortaPageModule)
  },
  {
    path: 'bacalhau',
    loadChildren: () => import('./bacalhau/bacalhau.module').then( m => m.BacalhauPageModule)
  },
  {
    path: 'sidonio',
    loadChildren: () => import('./sidonio/sidonio.module').then( m => m.SidonioPageModule)
  },
  {
    path: 'restaurantes',
    loadChildren: () => import('./restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
  {
    path: 'rojoes',
    loadChildren: () => import('./rojoes/rojoes.module').then( m => m.RojoesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
