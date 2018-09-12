import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PresentationComponent} from './presentation.component';

const routes: Routes = [
  {
    path: '',
    component: PresentationComponent,
    data: {
      title: 'Presentation',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - presentation',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
