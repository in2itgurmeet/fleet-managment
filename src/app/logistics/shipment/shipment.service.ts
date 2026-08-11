import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private apiUrl = 'http://localhost:5000/api/shipment'; // Adjust URL based on environment

  constructor(private http: HttpClient) {}

  createShipment(shipmentData: any): Observable<any> {
    return this.http.post(this.apiUrl, shipmentData);
  }

  getAllShipments(status?: string): Observable<any[]> {
    let params = new HttpParams();
    if (status && status !== 'All') {
      params = params.set('status', status);
    }
    return this.http.get<any[]>(this.apiUrl, { params });
  }

  getShipmentStats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/stats`);
  }
}
