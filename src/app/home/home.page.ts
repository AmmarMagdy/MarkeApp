import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Category } from './category';
import { NavController } from '@ionic/angular';
import { CategoryServiceService } from '../CategoryService/category-service.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    ImageArray: any [];
    categories: [Category];

	 constructor(public http: Http, public navCtrl: NavController, public categoryService: CategoryServiceService) {
		this.http.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories').map(res => res.json()).subscribe(data => {
			 this.categories = data;
		  });

		  this.ImageArray = [
		  {'image':'/assets/slide2.jpg'},
		  {'image':'/assets/homeslide.jpg'},
		  {'image':'/assets/fish-dish.jpg'},
		  {'image':'/assets/img1.jpg'}

		  ]
	 }
	 
	 gotoCatDetails(category) {
		  this.categoryService.setCategory(category);
		  this.navCtrl.navigateForward('/category-details-tabs');
	 }
	 
	
	 
	 startAutoPlay(slides) {
	 	
	 		slides.startAutoplay();
	 }
	 
}
