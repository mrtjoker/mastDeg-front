import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MimsClassComponent} from './mims-class.component';

const routes: Routes = [
  {
    path: '',
    component: MimsClassComponent,
    data: {
      title: 'mims-class',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - mims-class',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MimsClassRoutingModule { }
