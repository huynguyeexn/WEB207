import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ProductService]
})
export class AdminComponent implements OnInit {
  products: any;

  constructor(private _productService: ProductService) { }


  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }
  addCourse(data: object ) {
    this._productService.addProduct(data);
  }
}
