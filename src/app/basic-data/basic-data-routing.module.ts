import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BasicDataComponent } from './basic-data.component';

const routes: Routes = [
  {
    path: '',
    component: BasicDataComponent,
    data: {
      title: '',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - ข้อมูลพื้นฐาน',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicDataRoutingModule { }
