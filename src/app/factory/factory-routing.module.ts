import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FactoryComponent} from './factory.component';

const routes: Routes = [
  {
    path: '',
    component: FactoryComponent,
    data: {
      title: 'Factory',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - factory',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryRoutingModule { }
