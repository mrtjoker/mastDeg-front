import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class ThaiFDAService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllThaiFDA(): Observable<any> {
        return this.apiService.get(`thai-fda`);
    }

    addThaiFDA(data): Observable<any> {
        console.log(data)
        return this.apiService.post('thai-fda', data);
    }

    updateThaiFDA(id: string, data): Observable<any> {
        return this.apiService.put('thai-fda/' + id, data);
    }

    deleteThaiFDA(id: string): Observable<any> {
        return this.apiService.delete('thai-fda/' + id);
    }
    
}