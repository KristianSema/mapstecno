import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';

  lat: number = 45.506738;
  lng: number = 9.190766;

  lat2: number = 45.447737;
  lng2: number = 9.173956;
}
