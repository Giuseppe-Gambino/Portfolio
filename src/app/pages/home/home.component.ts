import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
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
export class HomeComponent {}
