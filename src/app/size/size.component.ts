import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})

export class SizeComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
    this.size = 16;
  }



  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(value: any) {
    this.size = Math.min(40, Math.max(8, +this.size + value));
    this.sizeChange.emit(this.size)
  }
}