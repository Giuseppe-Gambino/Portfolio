import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Lenis from '@studio-freight/lenis';
import { filter } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LenisService {
  constructor(private router: Router) {}

  private lenis!: Lenis;

  init() {
    if (!this.lenis) {
      this.lenis = new Lenis();

      const raf = (time: number) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      this.router.events
        .pipe(filter((e) => e instanceof NavigationEnd))
        .subscribe(() => {
          this.lenis.scrollTo(0, { immediate: true }); // scrolla in alto
        });
    }
  }

  scrollTo(target: any, options: any = {}) {
    if (this.lenis) {
      this.lenis.scrollTo(target, options);
    }
  }

  stop() {
    this.lenis?.stop();
  }

  start() {
    this.lenis?.start();
  }
}
