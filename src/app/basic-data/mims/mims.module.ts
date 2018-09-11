import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MimsComponent } from './mims.component';
import { MimsRoutingModule } from './mims-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { MimsService } from '../../shared/service/mims.service';
import { NgxDatatableModule } from '../../../../node_modules/@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    MimsRoutingModule,
    SharedModule,
    ChartModule,
    FormsModule,
    TagInputModule,
    NgxDatatableModule
  ],
  declarations: [
    MimsComponent
  ],
  providers: [MimsService]
})
export class MimsModule { }
