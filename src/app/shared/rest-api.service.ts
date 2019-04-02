import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
//import { Employee } from '../shared/employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
	// Define API
  apiURL = 'http://54.215.182.194:8080';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(this.apiURL + '/employees')
    .pipe(
      retry(1)
    )
  }

  getEmployeeCount(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(this.apiURL + '/employees/count/dept')
    .pipe(
      retry(1)
    )
  }

  // Error handling 
  /*handleError() {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }*/

}
