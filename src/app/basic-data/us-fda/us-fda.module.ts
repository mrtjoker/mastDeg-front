import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsFDAComponent} from './us-fda.component';
import {UsFDARoutingModule} from './us-fda-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { UsFDAService } from '../../shared/service/us-fda.service';
import { FormsModule } from '../../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    UsFDARoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    UsFDAComponent
  ],
  providers: [UsFDAService]
})
export class UsFDAModule { }
