import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slider', //project start point
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  //{
    //path: 'list',
   // loadChildren: './list/list.module#ListPageModule'
 // },
  { path: 'slider', loadChildren: './slider/slider.module#SliderPageModule' },
  
  { path: 'category-details-tabs', loadChildren: './category-details-tabs/category-details-tabs.module#CategoryDetailsTabsPageModule' },
  { path: 'product-details', loadChildren: './product-details/product-details.module#ProductDetailsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
