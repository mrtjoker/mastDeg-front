import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdverseReactionsComponent} from './adverse-reactions.component';
import {AdverseReactionsRoutingModule} from './adverse-reactions-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { AdverseReactionsService } from '../../shared/service/adverse-reactions.service';
import { FormsModule } from '../../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    AdverseReactionsRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    AdverseReactionsComponent
  ],
  providers: [AdverseReactionsService]
})
export class AdverseReactionsModule { }
