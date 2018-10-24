import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Employee} from '../model/Employee';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseControllerService {

  constructor(private store: AngularFirestore) {
  }


  async createUserData(employee: any):Promise<any> {
    try {
      let a = await this.store.collection('users').add(employee);
      this.store.collection('companies').doc('1234').collection('employees').doc(a.id).set(employee);

      Promise.resolve("success")
    } catch (e) {
      console.log(e);
      Promise.reject(e)
    }
  }

  getEmployees():Observable<Employee[]>{
    return this.store.collection("companies").doc("1234").collection("employees").snapshotChanges().pipe(map(value=>{
      return value.map(a=>{
        let employee = a.payload.doc.data() as Employee;
        employee.id = a.payload.doc.id;
        return employee
      })
    }))
  }
}
