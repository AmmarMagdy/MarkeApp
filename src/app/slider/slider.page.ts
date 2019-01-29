import { Component, OnInit, ViewChild} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],

})

export class SliderPage {

   ImageArray: any [];

  constructor(public navCtrl: NavController) {
    
    this.ImageArray = [
        {'image':'/assets/slide1.png'},
        {'image':'/assets/slide2.png'},
        {'image':'/assets/slide3.png'}
      ]
  }
  reachedEnd($event) {    
     { 
      setTimeout(() => 
        {
        this.navCtrl.navigateRoot(['/home']);
            },1000);          
    }
  }
}
