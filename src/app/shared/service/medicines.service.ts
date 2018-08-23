import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class MedicinesService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllMedicines(): Observable<any> {
        return this.apiService.get(`medicines`);
    }

    addMedicines(data): Observable<any> {
        return this.apiService.post('medicines', data);
    }

    updateMedicines(id: string, data): Observable<any> {
        return this.apiService.put('medicines/' + id, data);
    }

    deleteMedicines(id: string): Observable<any> {
        return this.apiService.delete('medicines/' + id);
    }
    searchMedicines(data){
        return this.apiService.put('medicineSearch', data);
    }
}