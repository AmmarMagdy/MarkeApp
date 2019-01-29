import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../ProductService/product.service';
import { Product } from '../home/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage  {
    
     product: Product;
    
    
  constructor(public productDetailsServise:ProductDetailsService) { 
  
        this.product = this.productDetailsServise.getProduct();
  }

}
