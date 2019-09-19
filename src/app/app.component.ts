import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewApp';
  points=0;

  point1()
  {
    this.points++;
  }
  reset()
  {
    this.points=0;
  }
}
