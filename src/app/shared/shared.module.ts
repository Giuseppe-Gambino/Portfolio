import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagneticButtonComponent } from './magnetic-button/magnetic-button.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [MagneticButtonComponent, LinkComponent],
  imports: [CommonModule],
  exports: [MagneticButtonComponent, LinkComponent],
})
export class SharedModule {}
