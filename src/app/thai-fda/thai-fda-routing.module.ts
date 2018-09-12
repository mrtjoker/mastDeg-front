import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThaiFDAComponent} from './thai-fda.component';

const routes: Routes = [
  {
    path: '',
    component: ThaiFDAComponent,
    data: {
      title: 'ThaiFDA',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - thaiFDA',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThaiFDARoutingModule { }
