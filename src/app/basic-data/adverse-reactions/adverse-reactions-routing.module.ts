import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdverseReactionsComponent} from './adverse-reactions.component';

const routes: Routes = [
  {
    path: '',
    component: AdverseReactionsComponent,
    data: {
      title: 'AdverseReactions',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - adverseReactions',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdverseReactionsRoutingModule { }
