import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContraindicationsComponent} from './contraindications.component';

const routes: Routes = [
  {
    path: '',
    component: ContraindicationsComponent,
    data: {
      title: 'Contraindications',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - contraindications',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContraindicationsRoutingModule { }
