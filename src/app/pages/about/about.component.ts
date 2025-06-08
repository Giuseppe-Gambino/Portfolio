import { Component, OnInit } from '@angular/core';
import { NavAnimationService } from '../../mainComponent/navbar/nav-animation.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  constructor(private navAn: NavAnimationService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.navAn.show();
    }, 500);

    // gsap.to('.infinity-icon', {
    //   xPercent: -200,
    //   ease: 'linear',
    //   repeat: -1,

    //   stagger: 0.1,
    // });
  }
}
