import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images:any = [{
    orderId:1,
    src:"http://placekitten.com/1600/900"
  },
  {
    orderId:2,
    src:"http://placekitten.com/g/1600/900"
  },
  {
    orderId:3,
    src:"http://placekitten.com/1600/900"
  },
  {
    orderId:4,
    src:"http://placekitten.com/g/1600/900"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
