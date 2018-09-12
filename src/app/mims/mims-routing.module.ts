import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MimsComponent} from './mims.component';

const routes: Routes = [
  {
    path: '',
    component: MimsComponent,
    data: {
      title: 'MIMS Class',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - mims',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MimsRoutingModule { }
