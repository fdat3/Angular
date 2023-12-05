import { Component } from '@angular/core';
import { ProfileEditorComponent } from '../profile-editor/profile-editor.component';
import { NameEditorComponent } from '../name-editor/name-editor.component';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  styleUrls: ['./form.component.css'],
  template: `
    <h1>Reactive Forms</h1>

    <nav>
      <button type="button" (click)="toggleEditor('name')">Name Editor</button>
      <button type="button" (click)="toggleEditor('profile')">
        Profile Editor
      </button>
    </nav>

    <app-name-editor *ngIf="showNameEditor"></app-name-editor>

    <app-profile-editor *ngIf="showProfileEditor"></app-profile-editor>
  `,
  styles: [
    `
      nav button {
        padding: 1rem;
        font-size: inherit;
      }
    `,
  ],
  imports: [
    NameEditorComponent,
    ProfileEditorComponent,
    NgIf,
    ReactiveFormsModule,
  ],
})
export class FormComponent {
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
