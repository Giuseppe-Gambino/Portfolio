import { Component } from '@angular/core';
import { NavAnimationService } from '../../../mainComponent/navbar/nav-animation.service';
import { Project, PROJECTS } from '../../../data/projects';
import { ActivatedRoute } from '@angular/router';

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

  ngOnInit(): void {
    this.navAn.show();

    if (this.route.snapshot.paramMap.get('id') !== null) {
      const id = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.project = this.projects[id];
    }
  }
}
