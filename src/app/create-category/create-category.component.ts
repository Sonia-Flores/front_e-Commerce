import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {
categoryTitle: string = '';
categoryForm: any;
submit: any;


onSubmit(){
  console.log('Category Title', this.categoryTitle)
  }
}
