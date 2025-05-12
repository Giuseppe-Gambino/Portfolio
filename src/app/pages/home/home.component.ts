import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngAfterViewInit() {
    gsap.from('.hero-text', { x: -200, duration: 1.5, opacity: 0 });
  }
}
