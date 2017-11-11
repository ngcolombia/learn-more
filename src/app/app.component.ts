import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  private baseUrl = 'https://api.adorable.io/avatars/500/';
  private urlSuffix = '@adorable.io.png';
  imageUrl: string;

  constructor() {
    setInterval(() => this.generateRandomFace(), 1000);
  }

  generateRandomFace() {
    this.imageUrl = `${this.baseUrl}${this.generateRandomWord()}${this.urlSuffix}`
  }

  generateRandomWord(): string {
    return `${Math.random()}`;
  }
}

