import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MimsClassComponent} from './mims-class.component';
import {MimsClassRoutingModule} from './mims-class-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    MimsClassRoutingModule,
    SharedModule,
    ChartModule
  ],
  declarations: [
    MimsClassComponent
  ]
})
export class MimsClassModule { }
