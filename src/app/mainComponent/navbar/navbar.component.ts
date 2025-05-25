import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { NavAnimationService } from './nav-animation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(public navAn: NavAnimationService) {}

  ngAfterViewInit(): void {
    gsap.set('.nav-bar', { y: -200 });
  }

  ngOnInit(): void {
    this.navAn.isNavOpen$.subscribe((isOpen) => {
      if (isOpen) {
        gsap.to('.nav-bar', {
          y: 0,
          animation: 'ease-in-out',
          duration: 0.5,
        });

        console.log('Navbar opened');
      } else {
        gsap.to('.nav-bar', {
          y: -200,
          animation: 'ease-in-out',
          duration: 0.5,
        });

        console.log('Navbar closed');
      }
    });
  }
}
