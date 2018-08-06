import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class WarningService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllWarning(): Observable<any> {
        return this.apiService.get(`warning`);
    }

    addWarning(data): Observable<any> {
        return this.apiService.post('warning', data);
    }

    updateWarning(id: string, data): Observable<any> {
        return this.apiService.put('warning/' + id, data);
    }

    deleteWarning(id: string): Observable<any> {
        return this.apiService.delete('warning/' + id);
    }
    
}