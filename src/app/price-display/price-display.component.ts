import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent  {

  @Input() price: number = 0;

}
