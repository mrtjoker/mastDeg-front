import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DosageComponent} from './dosage.component';
import {DosageRoutingModule} from './dosage-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { DosageService } from '../../shared/service/dosage.service';
import { FormsModule } from '../../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    DosageRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    DosageComponent
  ],
  providers: [DosageService]
})
export class DosageModule { }
