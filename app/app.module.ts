import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { MeetingComponent } from './meeting/meeting.component';

const config = {
  apiKey: "AIzaSyCpqI773ach6MxOcIqRvgDFBVVTvLJW-Ew",
  authDomain: "sample6-d38d3.firebaseapp.com",
  databaseURL: "https://sample6-d38d3.firebaseio.com",
  projectId: "sample6-d38d3",
  storageBucket: "gs://sample6-d38d3.appspot.com",
  messagingSenderId: "358754973898"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  declarations: [AppComponent, MeetingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
