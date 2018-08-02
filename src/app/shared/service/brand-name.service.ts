import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
@Injectable()

export class BrandNameService {

    constructor(
        private apiService: ApiService
    ) { }

    getAllBrandName(): Observable<any> {
        return this.apiService.get(`brand-name`);
    }

    addBrandName(data): Observable<any> {
        console.log(data)
        return this.apiService.post('brand-name', data);
    }

    updateBrandName(id: string, data): Observable<any> {
        return this.apiService.put('brand-name/' + id, data);
    }

    deleteBrandName(id: string): Observable<any> {
        return this.apiService.delete('brand-name/' + id);
    }
    
}