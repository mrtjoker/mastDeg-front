import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class AdviceService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllAdvice(): Observable<any> {
        return this.apiService.get(`advice`);
    }

    addAdvice(data): Observable<any> {
        console.log(data)
        return this.apiService.post('advice', data);
    }

    updateAdvice(id: string, data): Observable<any> {
        return this.apiService.put('advice/' + id, data);
    }

    deleteAdvice(id: string): Observable<any> {
        return this.apiService.delete('advice/' + id);
    }
    
}