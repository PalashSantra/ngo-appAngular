import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() type:any
  @Input() dataset:any

  @Output() menuDataEmitter = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  sendTitle(value:any){
    this.menuDataEmitter.emit(value)
  }

}
