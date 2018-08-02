import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdviceComponent} from './advice.component';

const routes: Routes = [
  {
    path: '',
    component: AdviceComponent,
    data: {
      title: 'Advice',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - advice',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviceRoutingModule { }
