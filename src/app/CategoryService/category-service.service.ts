import { Injectable } from '@angular/core';
import { Category } from '../home/category';

@Injectable({
  providedIn: 'root'
})

export class CategoryServiceService {

  
  private category: Category;
  
  constructor() {}

  public setCategory(category) {
    this.category = category;
  }

  getCategory() {
    return this.category;
  }
  
}
