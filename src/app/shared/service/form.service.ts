import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class FormService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllForm(): Observable<any> {
        return this.apiService.get(`form`);
    }

    addForm(data): Observable<any> {
        return this.apiService.post('form', data);
    }

    updateForm(id: string, data): Observable<any> {
        return this.apiService.put('form/' + id, data);
    }

    deleteForm(id: string): Observable<any> {
        return this.apiService.delete('form/' + id);
    }
    
}