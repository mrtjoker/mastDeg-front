import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdviceComponent} from './advice.component';
import {AdviceRoutingModule} from './advice-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { AdviceService } from '../shared/service/advice.service';
import { FormsModule } from '../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    AdviceRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    AdviceComponent
  ],
  providers: [AdviceService]
})
export class AdviceModule { }
