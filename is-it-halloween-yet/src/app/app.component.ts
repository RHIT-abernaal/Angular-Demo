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
  day = this.today.getDay();
  changeMonth(change: number) : void {
    this.month += change;
  }
}
