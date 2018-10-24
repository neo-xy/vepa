import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Employee} from '../../model/Employee';
import {FirebaseControllerService} from '../../services/firebase-controller.service';
import {NgbDateStruct, NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})


export class BookComponent implements OnInit {


  employees: Employee[] = [];
  sortedEmployees: Employee[] = [];
  selectedEmployee:Employee;

  constructor(private firebaseController: FirebaseControllerService, private config: NgbTypeaheadConfig,private change:ChangeDetectorRef) {

    this.firebaseController.getEmployees().subscribe(values => {
      this.employees = []
      this.employees = values.sort((a, b) => {
        if (a.firstName < b.firstName) {
          return -1;
        } else {
          return 1;
        }
      });
      this.sortedEmployees = this.employees
    });

  }
  ngOnInit() {
  }

  onSearchChange(value:string) {
    this.sortedEmployees = this.employees.filter(employee => {
        if (employee.firstName.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return employee;
        }else if(employee.lastName.toLowerCase().indexOf(value.toLowerCase()) > -1){
          return employee;
        }
      }
    );
    console.log(this.employees)
  }

  onEmployeeSelected(employee:Employee) {
this.selectedEmployee = employee

  }

  hasJobs(date: NgbDateStruct) {
    for (let i = 0; i < 3; i++) {

      if (3 === date.day && 10 === date.month && 2018 === date.year) {
        return true;
      }
    }
  }
}
