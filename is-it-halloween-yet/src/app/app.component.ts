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
  changeMonth(change: number) : void {
    this.month += change;
  }
  changeDay(change: number) : void {
    this.day += change;
  }
}
