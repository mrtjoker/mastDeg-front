import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class ContraindicationsService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllContraindications(): Observable<any> {
        return this.apiService.get(`contraindications`);
    }

    addContraindications(data): Observable<any> {
        console.log(data)
        return this.apiService.post('contraindications', data);
    }

    updateContraindications(id: string, data): Observable<any> {
        return this.apiService.put('contraindications/' + id, data);
    }

    deleteContraindications(id: string): Observable<any> {
        return this.apiService.delete('contraindications/' + id);
    }
    
}