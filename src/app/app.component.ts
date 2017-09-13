import { Component, OnInit } from '@angular/core';
import { ShopService } from './Services/shopService';
import { Product } from './Models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = ".Net Core & Angular Meet Up'a Hoş Geldiniz";
  ProductList: any;
  selectedProduct;
  model: Product;
  constructor(private service: ShopService) {

  }
  public ngOnInit() {
    this.service.GetList().subscribe(result =>
      this.ProductList = result,
      err => console.log(err),
      () => console.log("All Data Loaded")
    );
  }

  public fillDetail() {
    let _price = this.selectedProduct.Price;
    let _name = this.selectedProduct.Name;
    let _id = this.selectedProduct.ID;
    this.model = new Product(_price, _id, _name);
  }
}
