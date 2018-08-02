import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class MimsService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllMims(): Observable<any> {
        return this.apiService.get(`mims`);
    }

    addMims(data): Observable<any> {
        console.log(data)
        return this.apiService.post('mims', data);
    }

    updateMims(id: string, data): Observable<any> {
        return this.apiService.put('mims/' + id, data);
    }

    deleteMims(id: string): Observable<any> {
        return this.apiService.delete('mims/' + id);
    }
    
}