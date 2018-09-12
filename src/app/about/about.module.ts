import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { AdviceComponent } from '../advice/advice.component';
import { AdverseReactionsComponent } from '../adverse-reactions/adverse-reactions.component';
import { IndicationsComponent } from '../indications/indications.component';
import { ContraindicationsComponent } from '../contraindications/contraindications.component';
import { InteractionsComponent } from '../interactions/interactions.component';
import { WarningComponent } from '../warning/warning.component';
import { AdviceService } from '../shared/service/advice.service';
import { AdverseReactionsService } from '../shared/service/adverse-reactions.service';
import { IndicationsService } from '../shared/service/indications.service';
import { ContraindicationsService } from '../shared/service/contraindications.service';
import { InteractionsService } from '../shared/service/interactions.service';
import { WarningService } from '../shared/service/warning.service';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    AboutComponent,
    AdviceComponent,
    AdverseReactionsComponent,
    IndicationsComponent,
    ContraindicationsComponent,
    InteractionsComponent,
    WarningComponent
  ],
  providers: [
    AdviceService,
    AdverseReactionsService,
    IndicationsService,
    ContraindicationsService,
    InteractionsService,
    WarningService
  ],
})
export class AboutModule { }
