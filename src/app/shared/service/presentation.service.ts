import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class PresentationService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllPresentation(): Observable<any> {
        return this.apiService.get(`presentation`);
    }

    addPresentation(data): Observable<any> {
        return this.apiService.post('presentation', data);
    }

    updatePresentation(id: string, data): Observable<any> {
        return this.apiService.put('presentation/' + id, data);
    }

    deletePresentation(id: string): Observable<any> {
        return this.apiService.delete('presentation/' + id);
    }
    
}