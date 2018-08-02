import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndicationsComponent} from './indications.component';

const routes: Routes = [
  {
    path: '',
    component: IndicationsComponent,
    data: {
      title: 'Indications',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - indications',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicationsRoutingModule { }
