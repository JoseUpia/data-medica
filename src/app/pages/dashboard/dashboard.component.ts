import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user$!: Observable<User | null>;
  constructor(private sharedService: SharedService, private authService: AuthService) { }

  ngOnInit() {
    this.sharedService.setMemuHeaderTitle('Panel de control');

    this.user$ = this.authService.userState$;
  }

}
