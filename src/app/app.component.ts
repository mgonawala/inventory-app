import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product[];

  constructor(){
    this.products =
     [
       new Product('MYSHOES','Black Runnig Shoes',"assets/images/products/black-shoes.jpg",["Men","Shoes","Running Shoes"],50.12),
       new Product('NEATOJACKEST','Blue Jacket',"assets/images/products/blue-jacket.jpg",["Men","Apparel","Jackets & Vests"],60.45),
       new Product('NICEHAT','Hat',"assets/images/products/black-hat.jpg",["Men","Accessories","Hats"],29.99),
     ];
  }

  productWasSelected(product: Product){
    console.log('Product Clicked:',product);
  }
}
