import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMedicinesComponent } from './search-medicines.component';
import { SearchMedicinesRoutingModule } from './search-medicines-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { SelectOptionService } from '../shared/elements/select-option.service';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { SearchMedicinesService } from '../shared/service/search-medicines.service';
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
    SearchMedicinesRoutingModule,
    SharedModule,
    ChartModule,
    FormsModule,
    TagInputModule,
    NgxDatatableModule,
    ArchwizardModule
  ],
  declarations: [
    SearchMedicinesComponent
  ],
  providers: [
    SelectOptionService,
    SearchMedicinesService,
    IndicationsService,
    DosageService,
    AdviceService,
    ContraindicationsService,
    WarningService,
    AdverseReactionsService,
    InteractionsService,
  ]
})
export class SearchMedicinesModule { }
