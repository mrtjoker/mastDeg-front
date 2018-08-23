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
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { BrandNameService } from '../shared/service/brand-name.service';
import { GenericNameService } from '../shared/service/generic-name.service';
import { ThaiFDAService } from '../shared/service/thai-fda.service';
import { FormService } from '../shared/service/form.service';
import { ShapeService } from '../shared/service/shape.service';
import { ColorService } from '../shared/service/color.service';
import { MimsService } from '../shared/service/mims.service';
import { FactoryService } from '../shared/service/factory.service';
import { MedicinesService } from '../shared/service/medicines.service';
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
    SearchMedicinesComponent,
    SearchComponent,
    ListComponent
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
    BrandNameService,
    GenericNameService,
    ThaiFDAService,
    FormService,
    ShapeService,
    ColorService,
    MimsService,
    FactoryService,
    MedicinesService
  ]
})
export class SearchMedicinesModule { }
