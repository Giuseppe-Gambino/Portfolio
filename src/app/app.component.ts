import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';

  ngAfterViewInit() {
    gsap.to('.box', { rotation: 360, duration: 2 });
  }
}
