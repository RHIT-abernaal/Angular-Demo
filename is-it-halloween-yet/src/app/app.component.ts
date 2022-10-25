import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Is it Halloween?';
  today = new Date();
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  month = this.today.getMonth();
  day = this.today.getDate();
  holidays = [
    {month: 10, day: 31, image: "/assets/halloween-5596921_1280.jpg"},
    {month: 1, day: 1, image: "/assets/happy-new-year-1063797_1280.jpg"},
    {month: 7, day: 4, image: "/assets/eagle-1063863_1920.jpg"},
  ];
  changeMonth(change: number) : void {
    this.month += change;
  }
  changeDay(change: number) : void {
    this.day += change;
  }
}
