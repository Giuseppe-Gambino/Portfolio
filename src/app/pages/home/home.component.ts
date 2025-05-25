import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { NavAnimationService } from '../../mainComponent/navbar/nav-animation.service';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private navAn: NavAnimationService) {}

  ngAfterViewInit() {
    gsap.from('.hero-text', { x: -200, duration: 0.5, opacity: 0 });
  }

  ngOnInit(): void {
    gsap.to('.hero-text', {
      x: 2000,
      scrollTrigger: {
        trigger: '.hero-text',
        scrub: true,
        pin: true,
        start: 'center center',
        end: 'top 0%',
      },
      duration: 1.5,
      ease: 'power1.inOut',
    });

    gsap.to('.box-img', {
      x: -1400,
      scrollTrigger: {
        trigger: '.box-img',
        scrub: true,
        pin: true,
        start: 'center center',
        end: 'bottom top',
      },
      duration: 1,
      ease: 'power1.inOut',
    });

    gsap.to('.text-about', {
      scrollTrigger: {
        trigger: '.text-about',
        scrub: true,
        start: 'top center',
        end: 'top 100rem',
      },
      delay: 5.5,
      opacity: 1,
    });

    gsap.to('.skills', {
      scrollTrigger: {
        trigger: '.skills',
        scrub: true,
        markers: true,
        start: 'center 60%',
        onEnter: () => this.navAn.show(),
        onLeaveBack: () => this.navAn.hide(),
      },
    });
  }
}
