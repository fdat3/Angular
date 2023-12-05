import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { SizeComponent } from './size/size.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { TableComponent } from './table/table.component';
import { SquadComponent } from './squad/squad.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: 'student', component: ListStudentComponent },
  { path: 'size', component: SizeComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'post', component: PostComponent },
  { path: 'post-detail/:id', component: PostDetailComponent },
  { path: 'table', component: TableComponent },
  { path: 'squad', component: SquadComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
