import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class FactoryService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllFactory(): Observable<any> {
        return this.apiService.get(`factory`);
    }

    addFactory(data): Observable<any> {
        return this.apiService.post('factory', data);
    }

    updateFactory(id: string, data): Observable<any> {
        return this.apiService.put('factory/' + id, data);
    }

    deleteFactory(id: string): Observable<any> {
        return this.apiService.delete('factory/' + id);
    }
    
}