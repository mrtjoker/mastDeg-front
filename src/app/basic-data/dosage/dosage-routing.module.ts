import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DosageComponent} from './dosage.component';

const routes: Routes = [
  {
    path: '',
    component: DosageComponent,
    data: {
      title: 'Dosage',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - dosage',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DosageRoutingModule { }
