import { Injectable } from '@angular/core';
import Lenis from '@studio-freight/lenis';
@Injectable({
  providedIn: 'root',
})
export class LenisService {
  constructor() {}

  private lenis!: Lenis;

  init() {
    if (!this.lenis) {
      this.lenis = new Lenis();

      const raf = (time: number) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
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
