import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient :HttpClient) { }

  addEmployee(data: Employee): Observable<any>
 {
  const headers = { 'content-type': 'application/json'}  ;
    return this.httpClient.post('http://localhost:3000/employee', data,{'headers':headers});
  }
  deletEmployee (id: number): Observable<any>
  {
    const headers = { 'content-type': 'application/json'}  ;
    return this.httpClient.delete('http://localhost:3000/employee/'+id,{'headers':headers});
  }

  updateEmployee(data: Employee): Observable<any>
 {
  const headers = { 'content-type': 'application/json'}  ;
    return this.httpClient.put('http://localhost:3000/employee/'+data.id, data,{'headers':headers});
  
  }
  getEmployee(id: number): Observable<any>
 {
  const headers = { 'content-type': 'application/json'}  ;
    return this.httpClient.get<Employee>('http://localhost:3000/employee/'+id,{'headers':headers});
    //return this.httpClient.get()
  
  }
  
}