import { ProductsService } from './../../services/products.service';
import { IProduct } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  id: number;
  product: IProduct | undefined;
  loading: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.id = +this.activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log('ProductID:', this.id);

    this.productsService.products$.subscribe((products) => {
      console.log(products);
      if (!products.length) {
        this.loading = true;
        this.productsService.getById(this.id).subscribe((product) => {
          this.product = product;
          this.loading = false;
        });
      } else {
        this.product = products.find((prod) => prod.id === this.id);
      }
    });
  }
}
