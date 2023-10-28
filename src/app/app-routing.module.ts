import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { TwoWayComponent } from './two-way/two-way.component';

const routes: Routes = [
  { path: "student", component: ListStudentComponent },
  { path: "twoWay", component:TwoWayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
