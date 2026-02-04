import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  http = inject(HttpClient);

  constructor() { }

  wish() {
    return this.http.get(environment.endPoint +'wish', {responseType: 'text'});
  }
}
