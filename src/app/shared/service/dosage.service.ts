import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class DosageService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllDosage(): Observable<any> {
        return this.apiService.get(`dosage`);
    }

    addDosage(data): Observable<any> {
        return this.apiService.post('dosage', data);
    }

    updateDosage(id: string, data): Observable<any> {
        return this.apiService.put('dosage/' + id, data);
    }

    deleteDosage(id: string): Observable<any> {
        return this.apiService.delete('dosage/' + id);
    }
    
}