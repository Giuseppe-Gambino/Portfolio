import { Component, effect, inject, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { NavAnimationService } from './nav-animation.service';
import { LenisService } from '../../services/lenis.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private navAn = inject(NavAnimationService);

  isOpen: boolean = true;

  constructor(private lenis: LenisService) {
    effect(() => {
      if (this.navAn.isNavOpen()) {
        gsap.to('.nav-bar', {
          y: 0,
          ease: 'power2.out',
          opacity: 1,
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
  ngOnInit(): void {
    //   gsap.from('.nav-item', {
    //     x: 100,
    //     top: 0,
    //     bottom: 0,
    //     duration: 500,
    //   });
  }

  scrollDown() {
    this.lenis.scrollTo('.cot');
  }

  click() {
    this.isOpen = !this.isOpen;
  }
}
