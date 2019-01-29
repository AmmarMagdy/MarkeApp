import { Injectable } from '@angular/core';
import { Product } from '../home/product';

@Injectable({
  providedIn: 'root'
})

export class ProductDetailsService {

  
 private product: Product;

  
  constructor() {}

  public setProduct(product) {
    this.product = product;
  }

  getProduct() {
    return this.product;
  }
  
}

