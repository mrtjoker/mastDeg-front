import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllBasicDataComponent} from './all-basic-data.component';

const routes: Routes = [
  {
    path: '',
    component: AllBasicDataComponent,
    data: {
      title: '',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - all-basic-data',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllBasicDataRoutingModule { }