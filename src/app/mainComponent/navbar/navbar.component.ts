import { Component, effect, inject, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { NavAnimationService } from './nav-animation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private navAn = inject(NavAnimationService);

  constructor() {
    effect(() => {
      if (this.navAn.isNavOpen()) {
        gsap.to('.nav-bar', {
          y: 0,
          ease: 'power2.out',
          duration: 0.5,
        });
      } else {
        gsap.to('.nav-bar', {
          y: -200,
          ease: 'power2.out',
          duration: 0.5,
        });
      }
    });
  }
}
