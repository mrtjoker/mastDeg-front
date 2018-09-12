import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsFDAComponent} from './us-fda.component';

const routes: Routes = [
  {
    path: '',
    component: UsFDAComponent,
    data: {
      title: 'UsFDA',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - usFDA',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsFDARoutingModule { }
