import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
@Injectable()

export class ShapeService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllShape(): Observable<any> {
        return this.apiService.get(`shape`);
    }

    addShape(data): Observable<any> {
        console.log(data)
        return this.apiService.post('shape', data);
    }

    updateShape(id: string, data): Observable<any> {
        return this.apiService.put('shape/' + id, data);
    }

    deleteShape(id: string): Observable<any> {
        return this.apiService.delete('shape/' + id);
    }
    
}