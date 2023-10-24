import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { SizeComponent } from './size/size.component';

const routes: Routes = [
  { path: 'student', component: ListStudentComponent },
  { path: 'size', component: SizeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
