import { Component, OnInit, Input } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import { mergeMap } from 'rxjs/operators';
import { MedicinesService } from '../shared/service/medicines.service';
import { IndicationsService } from '../shared/service/indications.service';
import { DosageService } from '../shared/service/dosage.service';
import { AdviceService } from '../shared/service/advice.service';
import { WarningService } from '../shared/service/warning.service';
import { ContraindicationsService } from '../shared/service/contraindications.service';
import { InteractionsService } from '../shared/service/interactions.service';
import { AdverseReactionsService } from '../shared/service/adverse-reactions.service';
@Component({
  selector: 'app-search-medicines',
  templateUrl: './search-medicines.component.html',
  styleUrls: ['./search-medicines.component.scss',
    '../../assets/icon/icofont/css/icofont.scss',]
})
export class SearchMedicinesComponent implements OnInit {


  @Input('modalDefault') modalDefault: any;

  constructor() { }

  ngOnInit() {
  
  }

}
