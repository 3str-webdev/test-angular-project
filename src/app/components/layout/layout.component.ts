import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  menuRoutes: Pick<Route, 'path' | 'title'>[] = [
    { path: 'products', title: 'Products' },
    { path: 'about', title: 'About' },
  ];
  constructor() {}
}
