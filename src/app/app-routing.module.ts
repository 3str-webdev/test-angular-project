import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';

export const routes: Routes = [
  { path: '', component: ProductsPageComponent, title: 'Products' },
  { path: 'about', component: AboutPageComponent, title: 'About' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
