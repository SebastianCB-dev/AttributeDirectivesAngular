import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {

  productForm: FormGroup = this.fb.group({
    'name': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder){}

  fieldValidator(control: string): boolean {
    return this.productForm.get(control)?.invalid || false;
  }

  getColor() {
    return (this.productForm.invalid) ? 'red' : 'green';
  }

}
