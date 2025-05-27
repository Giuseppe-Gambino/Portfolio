import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagneticButtonComponent } from './magnetic-button/magnetic-button.component';

@NgModule({
  declarations: [MagneticButtonComponent],
  imports: [CommonModule],
  exports: [MagneticButtonComponent],
})
export class SharedModule {}
