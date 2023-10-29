import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { SweetalertService } from 'src/app/services/sweetalert.service';
import { AuthService } from '../service/auth.service';
import { User } from 'src/app/models/user';
import { ErrorFirebaseMessage } from 'src/app/components/util/errorFirebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../auth.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {} as User;
  formRegisterControl: FormGroup;

  constructor(private router: Router, private authService: AuthService,
  private sweetAlert: SweetalertService, private sharedService: SharedService) { 
    this.formRegisterControl = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      gender: new FormControl(0, [Validators.required, Validators.pattern(/[0-1]/)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(14)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  ngOnInit() {
  }

  redirectLogin(){
    this.router.navigate(['/auth/login']);
  }

  signUp(){
    this.sharedService.setIsLoading(true);
    if (this.formRegisterControl.valid){
      this.authService.signUp(this.formRegisterControl.value.email, this.formRegisterControl.value.password)
      .then((resp) => {
        if (resp) {          
          this.sweetAlert.warning('¡Error de registro!', ErrorFirebaseMessage.get(resp.code) || resp.message);
          this.sharedService.setIsLoading(false);
        }
      });
    }
    this.sharedService.setIsLoading(false);
  }


}
