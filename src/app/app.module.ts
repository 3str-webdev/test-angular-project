import { productsReducer } from './store/reducers/products.reducer';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { AddProductContentComponent } from './components/add-product-content/add-product-content.component';
import { FocusDirective } from './directives/focus.directive';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    AddProductContentComponent,
    FocusDirective,
    AboutPageComponent,
    ProductsPageComponent,
    LayoutComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ products: productsReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
