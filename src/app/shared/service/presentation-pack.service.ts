import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class PresentationPackService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllPresentationPack(): Observable<any> {
        return this.apiService.get(`presentation-pack`);
    }

    addPresentationPack(data): Observable<any> {
        return this.apiService.post('presentation-pack', data);
    }

    updatePresentationPack(id: string, data): Observable<any> {
        return this.apiService.put('presentation-pack/' + id, data);
    }

    deletePresentationPack(id: string): Observable<any> {
        return this.apiService.delete('presentation-pack/' + id);
    }
    
}