import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class IndicationsService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllIndications(): Observable<any> {
        return this.apiService.get(`indications`);
    }

    addIndications(data): Observable<any> {
        console.log(data)
        return this.apiService.post('indications', data);
    }

    updateIndications(id: string, data): Observable<any> {
        return this.apiService.put('indications/' + id, data);
    }

    deleteIndications(id: string): Observable<any> {
        return this.apiService.delete('indications/' + id);
    }
    
}