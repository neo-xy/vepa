import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {ChangeDetection} from '@angular/cli/lib/config/schema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  authSuccesfull =false


  constructor(private auth: AngularFireAuth,private change:ChangeDetectorRef) {
    this.auth.auth.onAuthStateChanged(user=>{
      if (user==null) {
        this.authSuccesfull = false;
        this.change.detectChanges()
      } else {
        this.authSuccesfull = true;
        this.change.detectChanges()
      }
    })
  }

  ngOnInit(): void {


  }
}
