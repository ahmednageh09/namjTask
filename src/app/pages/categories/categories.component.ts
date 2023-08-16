import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: Category[] = [];
  constructor(private service: IssuesService) {
    this.categories = service.getCategory()
  }

  getCategoryClass(index: number): string {

    switch (index) {
      case 1:
        return 'category-1';
      case 2:
        return 'category-2';
      case 3:
        return 'category-3';
      case 4:
        return 'category-4';
      default:
        return '';
    }
  }
}
