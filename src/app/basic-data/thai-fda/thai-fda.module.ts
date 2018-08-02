import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThaiFDAComponent } from './thai-fda.component';
import { ThaiFDARoutingModule } from './thai-fda-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ThaiFDAService } from '../../shared/service/thai-fda.service';
import { FormsModule } from '../../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ThaiFDARoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    ThaiFDAComponent
  ],
  providers: [ThaiFDAService]
})
export class ThaiFDAModule { }
