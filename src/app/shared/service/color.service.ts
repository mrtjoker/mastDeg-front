import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class ColorService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllColor(): Observable<any> {
        return this.apiService.get(`color`);
    }

    addColor(data): Observable<any> {
        console.log(data)
        return this.apiService.post('color', data);
    }

    updateColor(id: string, data): Observable<any> {
        return this.apiService.put('color/' + id, data);
    }

    deleteColor(id: string): Observable<any> {
        return this.apiService.delete('color/' + id);
    }
    
}