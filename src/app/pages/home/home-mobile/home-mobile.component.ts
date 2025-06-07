import { Component, OnInit } from '@angular/core';
import { NavAnimationService } from '../../../mainComponent/navbar/nav-animation.service';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrl: './home-mobile.component.scss',
})
export class HomeMobileComponent implements OnInit {
  constructor(private navAn: NavAnimationService) {}
  ngOnInit(): void {
    this.navAn.showMob();
  }
}
