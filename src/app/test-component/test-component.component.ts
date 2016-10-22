import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = 'My first angular2-google-maps project';
  lat: number = 53.345764;
  lng: number = -6.261247;
  zoom: number = 14;

  violatingCars: [any] = [{
    stationName: 'Name1',
    lat: 51.678418,
    lng: 7.809007
  }];

  iconUrl: string = '../assets/images/illegal_car.png'

}
