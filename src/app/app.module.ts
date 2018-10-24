import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localeSv from '@angular/common/locales/sv';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './main/home/home.component';
import {environment} from '../environments/environment.prod';
import {AngularFireModule} from '@angular/fire';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { MainComponent } from './main/main.component';
import { NewEmployeeComponent } from './main/new-employee/new-employee.component';
import { BookComponent } from './main/book/book.component';
import {RouterModule, Routes} from '@angular/router';
import {registerLocaleData} from '@angular/common';
import {FirebaseControllerService} from './services/firebase-controller.service';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { CalendarComponent } from './calendar/calendar.component';


registerLocaleData(localeSv);

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'newEmployee', component: NewEmployeeComponent},
  {path: 'book', component: BookComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    NewEmployeeComponent,
    BookComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase,'vepa'),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'sv'},FirebaseControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
