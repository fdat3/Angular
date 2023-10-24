import { Component, OnInit } from '@angular/core';

export interface isStudent {
  id: number;
  name: string;
  yearSchool: string;
  falculty: string;
  mark: number;
}
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})

export class ListStudentComponent implements OnInit {
  student: isStudent = {
    id: 1,
    name: "Nguyen Phat Dat",
    yearSchool: "2021",
    falculty: "Information Technology",
    mark: 10
  }

  constructor() { }

  ngOnInit(): void {

  }
  getMark(mark: any) {
    this.student.mark = mark
  }

  getName(name: any) {
    this.student.name = name
  }
}


