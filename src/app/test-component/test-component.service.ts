import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http } from '@angular/http';

@Injectable()
export class TestComponentService {

  constructor(
    private http: Http,
    private af: AngularFire
  ) { }

  getAllIllegalCars(): Observable<any> {
    return this.af.database.list('/esb/stations')
      .map(cars => {
        return cars
      });
  }

}
