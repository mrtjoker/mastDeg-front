import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class ImprintService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllImprint(): Observable<any> {
        return this.apiService.get(`imprint`);
    }

    addImprint(data): Observable<any> {
        console.log(data)
        return this.apiService.post('imprint', data);
    }

    updateImprint(id: string, data): Observable<any> {
        return this.apiService.put('imprint/' + id, data);
    }

    deleteImprint(id: string): Observable<any> {
        return this.apiService.delete('imprint/' + id);
    }
    
}