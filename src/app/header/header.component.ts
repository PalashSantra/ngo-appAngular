import { Component, OnInit } from '@angular/core';
import primaryMenu from './primaryMenu.json';
import secondaryMenu from './secondaryMenu.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  primaryMenu:any
  secondaryMenu:any
  menuClicked:any
  sortFunction:any = (a:any,b:any)=>a.orderId>b.orderId ? 1 : -1
  constructor() { }

  ngOnInit(): void {
    this.primaryMenu = primaryMenu.sort(this.sortFunction)
    this.secondaryMenu = secondaryMenu.sort(this.sortFunction)
  }
  setMenuClicked($event:any){
    this.menuClicked = $event
  }

}
