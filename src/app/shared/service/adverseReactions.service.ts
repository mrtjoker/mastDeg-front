import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class AdverseReactionsService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllAdverseReactions(): Observable<any> {
        return this.apiService.get(`adverseReactions`);
    }

    addAdverseReactions(data): Observable<any> {
        console.log(data)
        return this.apiService.post('adverseReactions', data);
    }

    updateAdverseReactions(id: string, data): Observable<any> {
        return this.apiService.put('adverseReactions/' + id, data);
    }

    deleteAdverseReactions(id: string): Observable<any> {
        return this.apiService.delete('adverseReactions/' + id);
    }

}