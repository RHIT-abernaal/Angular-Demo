import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/** class AppComponent is the component (the controller) */
export class AppComponent {
  title = 'Is it Halloween?';
  today = new Date();
  month = [
    {name: "January", days: 31},
    {name: "February", days: 28},
    {name: "March", days: 31},
    {name: "April", days: 30},
    {name: "May", days: 31},
    {name: "June", days: 30},
    {name: "July", days: 31},
    {name: "August", days: 31},
    {name: "September", days: 30},
    {name: "October", days: 31},
    {name: "November", days: 30},
    {name: "December", days: 31},
  ];
  display_month = this.today.getMonth();
  display_day = this.today.getDate();
  holidays = [
    {month: 10, day: 31, image: "/assets/halloween-5596921_1280.jpg"},
    {month: 1, day: 1, image: "/assets/happy-new-year-1063797_1280.jpg"},
    {month: 7, day: 4, image: "/assets/eagle-1063863_1920.jpg"},
  ];
  changeMonth(change: number) : void {
    this.display_month += change;
    if(this.display_month == 12) {
      this.display_month = 0;
    }
    if(this.display_month == -1) {
      this.display_month = 11;
    }
    if(this.display_day > this.month[this.display_month].days) {
      this.display_day = this.month[this.display_month].days;
    }
  }
  changeDay(change: number) : void {
    this.display_day += change;
    if(this.display_day > this.month[this.display_month].days) {
      this.changeMonth(1);
      this.display_day = 1;
    }
    if(this.display_day <= 0) {
      this.changeMonth(-1);
      this.display_day = this.month[this.display_month].days;
    }
  }
}
