import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [ProductService]
})
export class AddComponent implements OnInit {
  public name;
  public price;
  public newPrice;
  public image;
  private data;

  constructor(private _productService: ProductService) { }

  addProduct() {
    this.data = {
      name: this.name,
      price: this.price,
      newPrice: this.newPrice,
      image: this.image,
      description: 'lorem',
      new: false,
      hot: false,
      created_at: Date.now()
    };

    this._productService.addProduct(this.data);
  }

  ngOnInit(): void {
  }

}
