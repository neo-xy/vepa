import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Form, FormGroup, NgForm} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  @ViewChild('navbar') navBar: ElementRef;
  @ViewChild('loginmodal') loginModalRef: ElementRef;
  modalRef:NgbModalRef

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 0) {
      (<HTMLDivElement>this.navBar.nativeElement).classList.add('navbar-shrink');
    } else {
      (<HTMLDivElement>this.navBar.nativeElement).classList.remove('navbar-shrink');
    }
  }

  constructor(private modal:NgbModal, private auth: AngularFireAuth) {
    console.log("innnn")
  }

  ngOnInit() {
  }

  openLoginModal() {

    this.modalRef = this.modal.open(this.loginModalRef,{size:'sm'})

  }

  onSubmit(form:NgForm) {

    let email = form.form.controls.email.value;
    let password = form.form.controls.password.value;
    this.auth.auth.signInWithEmailAndPassword(email,password).then(suc=>{
      console.log(suc)
      this.modalRef.close()
    })
  }
}
