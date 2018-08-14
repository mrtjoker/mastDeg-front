import { Component, OnInit } from '@angular/core';
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
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss',
    '../../assets/icon/icofont/css/icofont.scss',
    '../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css']
})
export class MedicinesComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  public brandName = [];
  public genericName = [];
  public mimsClass = [];
  public presentation = [];
  public presentationPack = [];
  public thaiFDATH = [];
  public usFDA = [];
  public form = [];
  public imprint = [];
  public color = [];
  public indications = [];
  public dosage = [];
  public advice = [];
  public contraindications = [];
  public warning = [];
  public adverseReactions = [];
  public interactions = [];
  public factory = [];
  public temp = {
    adverseReactions: '',
    advice: '',
    color: '',
    colorCode: '',
    brandName: '',
    contraindications: '',
    dosage: '',
    form: '',
    genericName: '',
    imprint: '',
    indications: '',
    interactions: '',
    mimsClass: '',
    presentation: '',
    presentationPack: '',
    initialThaiFDA: '',
    thaiFDAEN: '',
    thaiFDATH: '',
    usFDA: '',
    warning: '',
    registrationNumber: '',
    numberFD: '',
    allowFacturer: '',
    manuFacturer: '',
    distributor: '',
    marketer: '',
  };
  constructor(
    private medicinesService: MedicinesService,
    private indicationsService: IndicationsService,
    private dosageService: DosageService,
    private adviceService: AdviceService,
    private contraindicationsService: ContraindicationsService,
    private warningService: WarningService,
    private adverseReactionsService: AdverseReactionsService,
    private interactionsService: InteractionsService,
  ) { }

  ngOnInit() {
    this.indicationsService.getAllIndications().subscribe((result) => {
      result.forEach(element => { this.indications.push(element.indications); });
    });
    this.dosageService.getAllDosage().subscribe((result) => {
      result.forEach(element => { this.dosage.push(element.dosage); });
    });
    this.adviceService.getAllAdvice().subscribe((result) => {
      result.forEach(element => { this.advice.push(element.advice); });
    });
    this.contraindicationsService.getAllContraindications().subscribe((result) => {
      result.forEach(element => { this.contraindications.push(element.contraindications); });
    });
    this.warningService.getAllWarning().subscribe((result) => {
      result.forEach(element => { this.warning.push(element.warning); });
    });
    this.adverseReactionsService.getAllAdverseReactions().subscribe((result) => {
      result.forEach(element => { this.adverseReactions.push(element.adverseReactions); });
    });
    this.interactionsService.getAllInteractions().subscribe((result) => {
      result.forEach(element => { this.interactions.push(element.interactions); });
    });
    this.medicinesService.getAllMedicines().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
      console.log(results)
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.medicine.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  insert() {
    this.tmp = { medicine: this.value };
    this.value = '';
    this.medicinesService.addMedicines(this.tmp).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.medicinesService.updateMedicines(value._id, value).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.medicinesService.deleteMedicines(value._id).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  save(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  insertVal() {
    this.medicinesService.addMedicines(this.temp).subscribe();
    this.temp = {
      adverseReactions: '',
      advice: '',
      color: '',
      colorCode: '',
      brandName: '',
      contraindications: '',
      dosage: '',
      form: '',
      genericName: '',
      imprint: '',
      indications: '',
      interactions: '',
      mimsClass: '',
      presentation: '',
      presentationPack: '',
      initialThaiFDA: '',
      thaiFDAEN: '',
      thaiFDATH: '',
      usFDA: '',
      warning: '',
      registrationNumber: '',
      numberFD: '',
      allowFacturer: '',
      manuFacturer: '',
      distributor: '',
      marketer: '',
    };
  }
}