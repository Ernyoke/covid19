import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(
        private http: HttpClient
    ) {}

    getCasesByCounty( params?: any){
        return this.http.get<any>( `${environment.apiUrl}/dashboard/getCasesByCounty`, { params });
    }

    getHealthCasesByCounty( params?: any){
        return this.http.get<any>( `${environment.apiUrl}/dashboard/getHealthCasesByCounty`, { params });
    }

    getDeadCasesByCounty( params?: any){
        return this.http.get<any>( `${environment.apiUrl}/dashboard/getDeadCasesByCounty`, { params });
    }
}