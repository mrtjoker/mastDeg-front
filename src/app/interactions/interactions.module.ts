import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InteractionsComponent} from './interactions.component';
import {InteractionsRoutingModule} from './interactions-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { InteractionsService } from '../shared/service/interactions.service';
import { FormsModule } from '../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    InteractionsRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    InteractionsComponent
  ],
  providers: [InteractionsService]
})
export class InteractionsModule { }
