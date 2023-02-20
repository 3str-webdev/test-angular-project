import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  title = 'test-angular-project';
  loading = false;
  filter: string = '';

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService,
  ) {}

  ngOnInit(): void {
    console.log(this.productsService.products$);

    this.loading = true;
    this.productsService.getAll().subscribe((products) => {
      this.loading = false;
    });
  }
}
