import { Component } from '@angular/core';
import { Card } from "../card/card";
import { Api } from '../api';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [ Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products: any;
  constructor(private api: Api, private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.api.getAllProducts().subscribe((res: any)=>{
      this.products = res;
      this.cdr.detectChanges()
    })
  }
}
