import { Component, OnInit } from '@angular/core';
import { TestComponentService } from './test-component.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router'

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor(
    private carService: TestComponentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.carService.getAllIllegalCars()
      .map(cars => {
        return cars.map(car => {
          return {
            id: car.stationId,
            available: car.available.status,
            lat: Number(car.coordinates.latitude),
            lon: Number(car.coordinates.longitude),
            icon: this.getImageForStatus(car.available.status)
          }
        })
      })
      .subscribe(cars => {
        this.illegalCars = cars;
      })
  }

  illegalCars: any[];

  title: string = '';
  lat: number = 53.345764;
  lng: number = -6.261247;
  zoom: number = 14;

  iconUrl: string = '../assets/images/illegal_car.png';

  getImageForStatus(status: string): string {
    if(status == "Available") {
      return '../assets/images/illegal_car.png';
    } else if (status == "Charging") {
      return '../assets/images/illegal_car_charging.png';
    } else {
      return '../assets/images/illegal_car_unknown.png';
    }
  }

  gotoDetail(id: string): void {
    this.router.navigate(['/dashboard', id]);
  }

}
