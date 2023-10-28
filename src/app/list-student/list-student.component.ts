import { Component, OnInit } from '@angular/core';

export interface Istudent{
  id: number;
  name: string;
  mark: number;
}

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit  {
  student: Istudent={
    id:1,
    name:'huynh toan tuan',
    mark: 10
  };
  constructor(){}
  ngOnInit(): void {
    
  }
getMark(value: any){
  this.student.mark = value;
}
}
