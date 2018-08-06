import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class AdverseReactionsService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllAdverseReactions(): Observable<any> {
        return this.apiService.get(`adverse-reactions`);
    }

    addAdverseReactions(data): Observable<any> {
        return this.apiService.post('adverse-reactions', data);
    }

    updateAdverseReactions(id: string, data): Observable<any> {
        return this.apiService.put('adverse-reactions/' + id, data);
    }

    deleteAdverseReactions(id: string): Observable<any> {
        return this.apiService.delete('adverse-reactions/' + id);
    }

}