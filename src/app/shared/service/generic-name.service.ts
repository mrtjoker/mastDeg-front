import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class GenericNameService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllGenericName(): Observable<any> {
        return this.apiService.get(`generic-name`);
    }

    addGenericName(data): Observable<any> {
        return this.apiService.post('generic-name', data);
    }

    updateGenericName(id: string, data): Observable<any> {
        return this.apiService.put('generic-name/' + id, data);
    }

    deleteGenericName(id: string): Observable<any> {
        return this.apiService.delete('generic-name/' + id);
    }
    
}