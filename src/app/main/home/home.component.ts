import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FirebaseControllerService} from '../../services/firebase-controller.service';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {



  constructor(private firebaseController: FirebaseControllerService, private config: NgbTypeaheadConfig,private change:ChangeDetectorRef) {

  }
  ngOnInit() {
  }

}
