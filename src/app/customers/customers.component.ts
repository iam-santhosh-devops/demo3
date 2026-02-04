import { Component, inject } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  service = inject(EmployeeService);

  wish() {
    this.service.wish().subscribe(
      res => console.log('data fetched', res),
      err => console.log('Unable to fetch data', err));
  }

}
