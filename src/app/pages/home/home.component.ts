import { AfterContentInit, Component, OnInit } from '@angular/core';
import { gsap, normalize } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { NavAnimationService } from '../../mainComponent/navbar/nav-animation.service';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { LenisService } from '../../services/lenis.service';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private navAn: NavAnimationService,
    private lenis: LenisService
  ) {}

  ngAfterViewInit() {
    gsap.from('.hero-text', { x: -200, duration: 0.5, opacity: 0 });
  }

  stopOneSec() {
    this.lenis.stop();
    setTimeout(() => {
      this.lenis.start();
    }, 1000);
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

    gsap.to('.text-about', {
      scrollTrigger: {
        trigger: '.text-about',
        start: 'top 190rem',
        onEnter: () => this.stopOneSec(),
      },
    });

    gsap.to('.text-skills', {
      scrollTrigger: {
        trigger: '.text-skills',
        start: 'top 100rem',
        markers: true,
        onEnter: () => this.stopOneSec(),
      },
    });

    gsap.to('.skills', {
      scrollTrigger: {
        trigger: '.skills',
        scrub: true,

        start: 'center 60%',
        onEnter: () => this.navAn.show(),
        onLeaveBack: () => this.navAn.hide(),
      },
    });
  }
}
