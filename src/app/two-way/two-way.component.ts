import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
      this.size = 16;
  }

  @Input() size!: number | string;
  @Output() sizechange = new EventEmitter<number>();

  dec() {this.resize(-1);}
  inc() {this.resize(+1);}

  resize(delta: number){
    this.size = Math.min(40, Math.max(8, + this.size + delta));
    this.sizechange.emit(this.size);
  }
}
