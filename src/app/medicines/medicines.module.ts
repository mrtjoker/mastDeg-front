import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MedicinesComponent} from './medicines.component';
import {MedicinesRoutingModule} from './medicines-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
// import { MedicinesService } from '../shared/service/medicines.service';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { TagInputModule } from '../../../node_modules/ngx-chips';
import { SelectOptionService } from '../shared/elements/select-option.service';
@NgModule({
  imports: [
    CommonModule,
    MedicinesRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
  ],
  declarations: [SelectOptionService, MedicinesComponent]
  // providers: [MedicinesService]
})
export class MedicinesModule { }


