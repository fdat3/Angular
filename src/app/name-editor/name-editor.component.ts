import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css'],
  imports: [ReactiveFormsModule],
})
export class NameEditorComponent {
  nameForm = this.formBuilder.group({
    name: ['']
  })
  name = new FormControl('');

  constructor(private formBuilder: FormBuilder) { }
  updateName() {
    this.name.setValue('');
  }

  onSubmit() {
    console.warn(this.nameForm.value);
  }
}

