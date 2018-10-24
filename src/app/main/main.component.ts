import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private auth:AngularFireAuth) {

    console.log("main")

  }

  ngOnInit() {
  }

  logOut() {
    this.auth.auth.signOut();
  }
}
