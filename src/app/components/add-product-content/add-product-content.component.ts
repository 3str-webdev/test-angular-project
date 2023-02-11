import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-add-product-content',
  templateUrl: './add-product-content.component.html',
  styleUrls: ['./add-product-content.component.scss'],
})
export class AddProductContentComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private productsService: ProductsService,
    private modalService: ModalService
  ) {}

  get title() {
    return this.form.controls.title as FormControl;
  }

  isError() {
    if (this.title.errors) {
      console.log(this.title.errors, this.title.errors.minLength);
    }
    return this.title.errors && this.title.errors.minlength;
  }

  submit() {
    this.productsService
      .createProduct({
        title: this.title.value,
        price: 1000,
        description: 'Some description',
        category: 'People',
        image: 'https://i.pravatar.cc',
        rating: {
          rate: 1,
          count: 0,
        },
      })
      .subscribe(() => {
        this.modalService.close();
      });
    console.log(this.form.value);
  }

  ngOnInit(): void {}
}
