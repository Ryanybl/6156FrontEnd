import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { GetRequestComponent } from './get-request.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'orders', component: GetRequestComponent },
  { path: '**', redirectTo: '' }
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { };


