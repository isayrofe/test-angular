import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/unidad/';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  headers?: HttpHeaders
  constructor(private http: HttpClient) {
    let api_key = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiYWRtaW5pc3RyYWRvckBzZW1vdmlvYXhhY2EuZ29iLm14IiwidXN1YXJpb19pZCI6IjEiLCJyb2wiOjEsImFwbGljYWNpb24iOjEsImFyZWEiOiIxIiwibW9kdWxvIjoiNSIsIm1vZHVsb19ub21icmUiOiJNw5NEVUxPIENBUkxPUyBHUkFDSURBIiwicGVyc29uYSI6IjEiLCJwZXJzb25hX25vbWJyZSI6IkFETUlOSVNUUkFET1IgREVMIFNJU1RFTUEiLCJub21icmVfYXBsaWNhY2lvbiI6InNlcnZpY2lvcyIsImlhdCI6MTcwNzgzNzc5MSwiZXhwIjoxNzA3ODU1NzkxfQ.RAMYnduLWf7NZqra8F-wvJi5H8u-fpRhTE7Pn3ZVxcN36bB6DkoJIg2YJWh29asJu_IFMT9AklK0H1ylPp4ZG87zI5kYTAwBKyDnJnb3uhf3BfWJPDZ2kP6GJiC6lbNmAL4llRez3iptVvubrOKBRkVkpbQX1PoNaHg53Q2ZHHAWuvBTk2wFp7tuz0jNMf6afa-a0dQgWcfnsJY7nd9WvkY92cUQ3lLYIvfSYlCjdHkCWcAfJnfEfNqsv38PKw5qkVTbP9LHGHoawy8BwhHxsmlYnaRtgRDWx81--DMA5Ufp4FRaYoghtW3j417jR_4iGF9NGp9Y5ykkAg_qXXTJsQ";
    this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      });
  }

  getAll(): Observable<Tutorial[]> {
    const requestOptions = { headers: this.headers };
    return this.http.get<Tutorial[]>(baseUrl,requestOptions);
  }

  get(id: any): Observable<Tutorial> {
    const headers = { 'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiYWRtaW5pc3RyYWRvckBzZW1vdmlvYXhhY2EuZ29iLm14IiwidXN1YXJpb19pZCI6IjEiLCJyb2wiOjEsImFwbGljYWNpb24iOjEsImFyZWEiOiIxIiwibW9kdWxvIjoiNSIsIm1vZHVsb19ub21icmUiOiJNw5NEVUxPIENBUkxPUyBHUkFDSURBIiwicGVyc29uYSI6IjEiLCJwZXJzb25hX25vbWJyZSI6IkFETUlOSVNUUkFET1IgREVMIFNJU1RFTUEiLCJub21icmVfYXBsaWNhY2lvbiI6InNlcnZpY2lvcyIsImlhdCI6MTcwNzgzNzc5MSwiZXhwIjoxNzA3ODU1NzkxfQ.RAMYnduLWf7NZqra8F-wvJi5H8u-fpRhTE7Pn3ZVxcN36bB6DkoJIg2YJWh29asJu_IFMT9AklK0H1ylPp4ZG87zI5kYTAwBKyDnJnb3uhf3BfWJPDZ2kP6GJiC6lbNmAL4llRez3iptVvubrOKBRkVkpbQX1PoNaHg53Q2ZHHAWuvBTk2wFp7tuz0jNMf6afa-a0dQgWcfnsJY7nd9WvkY92cUQ3lLYIvfSYlCjdHkCWcAfJnfEfNqsv38PKw5qkVTbP9LHGHoawy8BwhHxsmlYnaRtgRDWx81--DMA5Ufp4FRaYoghtW3j417jR_4iGF9NGp9Y5ykkAg_qXXTJsQ' }
    return this.http.get<Tutorial>(`${baseUrl}/${id}`,{headers});
  }

  create(data: any): Observable<any> {
    const requestOptions = { headers: this.headers };
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }
}
