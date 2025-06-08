import { Component } from '@angular/core';
import { NavAnimationService } from '../../../mainComponent/navbar/nav-animation.service';
import { Project, PROJECTS } from '../../../data/projects';
import { ActivatedRoute } from '@angular/router';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  constructor(
    private navAn: NavAnimationService,
    private route: ActivatedRoute
  ) {}

  projects: Project[] = PROJECTS;

  project!: Project;

  gradientStyle!: { [key: string]: string };

  ngAfterViewInit() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1 } });

    tl.from('.banner', { y: -100, opacity: 0 })
      .addLabel('startContent', '-=0.4')
      .to('.sec1', { opacity: 1 }, 'startContent')
      .to('.sec2', { opacity: 1 }, 'startContent+=0.3')
      .to('.sec3', { opacity: 1 }, 'startContent+=0.6');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.navAn.show();
    }, 1000);

    if (this.route.snapshot.paramMap.get('id') !== null) {
      const id = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.project = this.projects[id];
      this.gradientStyle = {
        'background-image': `linear-gradient(to top right, ${this.project.color}, #030712)`,
      };
    }
  }
}
