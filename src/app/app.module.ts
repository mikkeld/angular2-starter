import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, FirebaseAuth } from 'angularfire2';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TestComponentService } from './test-component/test-component.service';
import { StationComponent } from './station/station.component';


export const firebaseConfig = {
  apiKey: "AIzaSyCqNxCAUowSWQvg_7ztQn3sqLefqApxRes",
  authDomain: "ebshackathon.firebaseapp.com",
  databaseURL: "https://ebshackathon.firebaseio.com",
  storageBucket: "ebshackathon.appspot.com",
};

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    DashboardComponent,
    StationComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    ChartsModule,
    routing,
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHwOMFMSURDztiCUxo4Jd-cIO8OmAjxAY'
    })
  ],
  providers: [TestComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
