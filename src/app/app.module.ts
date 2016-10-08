import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA-Grss9k2dfwX9SS_nsKRgNlDOxu7NFxU",
  authDomain: "explorer-app-12f14.firebaseapp.com",
  databaseURL: "https://explorer-app-12f14.firebaseio.com",
  storageBucket: "explorer-app-12f14.appspot.com",
};

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
