import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name: string = 'Aman';

  constructor() {
    this.name = 'Rishabh'
    console.log('initialize');
  }

  changeName(name: string): void {
    this.name = name;
  }
}
