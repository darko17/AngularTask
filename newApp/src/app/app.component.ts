import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = false;
  title = 'newApp';
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
