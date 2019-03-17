import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-assignment';

  public counter = 0;
    increment() {
      this.counter += 1;
    }

    decrement() {
      this.counter -= 1;
    }
}
