import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { VolumeComponent } from './volume.component';

const routes: Routes = [
  {
    path: '',
    component: VolumeComponent,
    data: {
      title: 'ปริมาณยา',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - ปริมาณยา',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolumeRoutingModule { }
