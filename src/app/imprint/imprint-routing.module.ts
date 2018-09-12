import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImprintComponent} from './imprint.component';

const routes: Routes = [
  {
    path: '',
    component: ImprintComponent,
    data: {
      title: 'Imprint',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - imprint',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImprintRoutingModule { }
