import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';
@Component({
  selector: 'app-secretpage',
  templateUrl: './secretpage.component.html',
  styleUrls: ['./secretpage.component.css']
})
export class SecretpageComponent implements OnInit {
  constructor(private router: Router, private authenticationService: AuthenticationService) { }
  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
