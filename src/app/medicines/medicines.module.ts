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
import { ArchwizardModule } from '../../../node_modules/ng2-archwizard/dist';
import { IndicationsService } from '../shared/service/indications.service';
import { DosageService } from '../shared/service/dosage.service';
import { AdviceService } from '../shared/service/advice.service';
import { ContraindicationsService } from '../shared/service/contraindications.service';
import { WarningService } from '../shared/service/warning.service';
import { AdverseReactionsService } from '../shared/service/adverse-reactions.service';
import { InteractionsService } from '../shared/service/interactions.service';
@NgModule({
  imports: [
    CommonModule,
    MedicinesRoutingModule,
    SharedModule,
    ChartModule,
    FormsModule,
    TagInputModule,
    NgxDatatableModule,
    ArchwizardModule
  ],
  declarations: [
    MedicinesComponent
  ],
  providers: [
    SelectOptionService,
    MedicinesService,
    IndicationsService,
    DosageService,
    AdviceService,
    ContraindicationsService,
    WarningService,
    AdverseReactionsService,
    InteractionsService,
  ]
})
export class MedicinesModule { }