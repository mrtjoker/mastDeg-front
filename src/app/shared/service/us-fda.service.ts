import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class UsFDAService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllUsFDA(): Observable<any> {
        return this.apiService.get(`us-fda`);
    }

    addUsFDA(data): Observable<any> {
        console.log(data)
        return this.apiService.post('us-fda', data);
    }

    updateUsFDA(id: string, data): Observable<any> {
        return this.apiService.put('us-fda/' + id, data);
    }

    deleteUsFDA(id: string): Observable<any> {
        return this.apiService.delete('us-fda/' + id);
    }
    
}