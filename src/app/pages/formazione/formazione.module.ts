import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormazioneRoutingModule } from './formazione-routing.module';
import { FormazioneComponent } from './formazione.component';


@NgModule({
  declarations: [
    FormazioneComponent
  ],
  imports: [
    CommonModule,
    FormazioneRoutingModule
  ]
})
export class FormazioneModule { }
