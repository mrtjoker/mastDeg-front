import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    data: {
      title: 'คุณลักษณะของเม็ดยา',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - คุณลักษณะของเม็ดยา',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
