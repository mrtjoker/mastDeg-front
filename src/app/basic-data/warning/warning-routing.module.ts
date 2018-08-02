import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WarningComponent} from './warning.component';

const routes: Routes = [
  {
    path: '',
    component: WarningComponent,
    data: {
      title: 'Warning',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - warning',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarningRoutingModule { }
