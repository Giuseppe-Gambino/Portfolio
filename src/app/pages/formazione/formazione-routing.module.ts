import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormazioneComponent } from './formazione.component';

const routes: Routes = [{ path: '', component: FormazioneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormazioneRoutingModule { }
