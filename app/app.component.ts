import { Component } from '@angular/core';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';

  constructor(public app: FirebaseApp) {
    
  }
}
