import { Component, OnInit } from '@angular/core';
import Lenis from '@studio-freight/lenis';
import { LenisService } from './services/lenis.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private lenis: LenisService) {}

  ngAfterViewInit(): void {
    this.lenis.init();
  }
}
