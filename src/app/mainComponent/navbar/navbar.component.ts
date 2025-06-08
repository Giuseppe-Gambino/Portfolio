import { Router } from '@angular/router';
import {
  Component,
  effect,
  ElementRef,
  inject,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
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

  isOpen: boolean = false;

  constructor(private lenis: LenisService, private Router: Router) {
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
    effect(() => {
      this.isOpen = this.navAn.isNavMobileOpen();
    });
  }

  ngOnInit(): void {
    // gsap.to('.contact', {
    //   y: -200,
    //   duration: 1.5,
    // });
  }

  scrollDown() {
    this.Router.navigate(['']);
    setTimeout(() => {
      window.scrollTo({
        top: 4000,
        behavior: 'smooth',
      });
    }, 100);
  }

  @ViewChildren('navItem', { read: ElementRef })
  navItems!: QueryList<ElementRef>;

  click() {
    this.navAn.toggleMob();

    if (this.navAn.isNavMobileOpen()) {
      setTimeout(() => {
        gsap.from(
          this.navItems.map((el) => el.nativeElement),
          {
            top: 0,
            right: 0,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power4.out',
          }
        );
      }, 0);
    }
  }
}
