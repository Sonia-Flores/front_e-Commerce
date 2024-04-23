import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Category } from '../../interfaces/categories.interface';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent {
  updateCategory: FormGroup

  category: Category= {
    id: 0,
    title: ''
  };
  categoriesService = inject(CategoriesService)
  router=inject(Router)
  
  constructor(){
    this.updateCategory = new FormGroup({
      title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    })
  }
  
    async onSubmit(){
    
  
   try {
     const response = await this.categoriesService.create(this.updateCategory.value);
     Swal.fire('Succes', `It has been added ${this.updateCategory.value.title} to the database.` )
     this.updateCategory.reset()
     }
    catch (error) {
    Swal.fire('Error','There has been an error.')
    Swal.fire(
      'Error!',
      `An error has occurred with the server. We apologize for the inconvenience.`,
      'error'
    );
   }}
  }
  

