import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class InteractionsService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllInteractions(): Observable<any> {
        return this.apiService.get(`interactions`);
    }

    addInteractions(data): Observable<any> {
        return this.apiService.post('interactions', data);
    }

    updateInteractions(id: string, data): Observable<any> {
        return this.apiService.put('interactions/' + id, data);
    }

    deleteInteractions(id: string): Observable<any> {
        return this.apiService.delete('interactions/' + id);
    }
    
}