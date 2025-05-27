import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-magnetic-button',
  templateUrl: './magnetic-button.component.html',
  styleUrl: './magnetic-button.component.scss',
})
export class MagneticButtonComponent implements OnInit {
  rotateTl = gsap.timeline({ repeat: -1, paused: true });

  ngOnInit(): void {
    this.rotateTl.to('.magBut', {
      rotation: 360,
      duration: 10,
      ease: 'none',
    });
  }

  @ViewChild('magBut', { static: true }) button!: ElementRef<HTMLButtonElement>;
  private boundingRect!: DOMRect;
  private isHovering = false;

  ngAfterViewInit(): void {
    this.boundingRect = this.button.nativeElement.getBoundingClientRect();
  }

  @HostListener('window:resize')
  onResize() {
    this.boundingRect = this.button.nativeElement.getBoundingClientRect();
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    this.isHovering = true;
    this.boundingRect = this.button.nativeElement.getBoundingClientRect();
    this.rotateTl.play();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isHovering) return;

    const mouseX = event.clientX - this.boundingRect.left;
    const mouseY = event.clientY - this.boundingRect.top;

    const deltaX = (mouseX - this.boundingRect.width / 2) * 0.4;
    const deltaY = (mouseY - this.boundingRect.height / 2) * 0.4;

    gsap.to(this.button.nativeElement, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    });
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.isHovering = false;

    gsap.to(this.button.nativeElement, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });

    this.rotateTl.pause();
    gsap.to('.magBut', {
      rotation: 0,
      duration: 0.2,
      ease: 'none',
    });
  }
}
