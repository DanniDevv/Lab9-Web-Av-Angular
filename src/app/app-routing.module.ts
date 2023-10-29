import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { ListImagesComponent } from './list-images/list-images.component';

const routes: Routes = [
  {path: 'saludo', component: SaludoComponent},
  {path: 'contador', component: ContadorComponent},
  {path: 'list-images', component: ListImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
