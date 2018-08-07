import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicinesComponent } from './medicines.component';
import { MedicinesRoutingModule } from './medicines-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { SelectOptionService } from '../shared/elements/select-option.service';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { MedicinesService } from '../shared/service/medicines.service';
import { NgxDatatableModule } from '../../../node_modules/@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    MedicinesRoutingModule,
    SharedModule,
    ChartModule,
    FormsModule,
    TagInputModule,
    NgxDatatableModule
  ],
  declarations: [
    MedicinesComponent
  ],
  providers: [SelectOptionService, MedicinesService]
})
export class MedicinesModule { }
