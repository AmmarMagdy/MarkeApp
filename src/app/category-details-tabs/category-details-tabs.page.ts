import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Category } from '../home/category';
import { CategoryServiceService } from '../CategoryService/category-service.service';
import { ProductDetailsService } from '../ProductService/product.service'

@Component({
  selector: 'app-category-details-tabs',
  templateUrl: './category-details-tabs.page.html',
  styleUrls: ['./category-details-tabs.page.scss'],
})
export class CategoryDetailsTabsPage {

    icon = 'add-circle-outline';
   
    category: Category;
    
    constructor(public navCtrl: NavController, categoryService: CategoryServiceService, public productDetailsService: ProductDetailsService) {
    
        this.category = categoryService.getCategory();
        console.log(this.category) 
    }

    addToCart($event) {
      if($event.srcElement.name == 'checkmark-circle') {
           $event.srcElement.name = 'add-circle-outline';
			  $event.srcElement.style.color = "#000";
       } else {
           $event.srcElement.name = 'checkmark-circle';
			  $event.srcElement.style.color = "#FC5C5C";
        }
    }
    
    addEvent(product){
        this.navCtrl.navigateForward('/product-details');
        this.productDetailsService.setProduct(product);
    }
}
