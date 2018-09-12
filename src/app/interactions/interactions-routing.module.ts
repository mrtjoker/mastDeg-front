import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InteractionsComponent} from './interactions.component';

const routes: Routes = [
  {
    path: '',
    component: InteractionsComponent,
    data: {
      title: 'Interactions',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - interactions',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionsRoutingModule { }
