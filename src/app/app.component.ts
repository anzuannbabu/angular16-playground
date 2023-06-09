import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todoApp';

  names = ['ali', 'juma', 'salim'];
  cashAmount = 3000

  currentDate = new Date()
}
