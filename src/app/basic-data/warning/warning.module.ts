import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WarningComponent} from './warning.component';
import {WarningRoutingModule} from './warning-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { WarningService } from '../../shared/service/warning.service';
import { FormsModule } from '../../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    WarningRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    WarningComponent
  ],
  providers: [WarningService]
})
export class WarningModule { }
