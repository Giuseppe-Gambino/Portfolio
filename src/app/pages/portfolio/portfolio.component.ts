import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NavAnimationService } from '../../mainComponent/navbar/nav-animation.service';
import { LenisService } from '../../services/lenis.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit, OnDestroy {
  constructor(
    private navAn: NavAnimationService,
    private lenis: LenisService
  ) {}

  ngOnInit(): void {
    this.navAn.show();
    this.lenis.stop();
  }

  ngOnDestroy(): void {
    this.navAn.hide();
    this.lenis.start();
  }

  showPreview(el: HTMLElement) {
    gsap.to(el, {
      opacity: 1,
      scale: 1.1,
      duration: 0.5,
      ease: 'power1.inOut',
    });
  }

  hidePreview(el: HTMLElement) {
    gsap.to(el, { opacity: 0, scale: 1, duration: 0.5, ease: 'power1.inOut' });
  }
}
