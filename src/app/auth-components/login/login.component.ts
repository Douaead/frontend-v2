// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth-services/auth-service/auth.service';
import { StorageService } from '../../auth-services/storage-service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private service: AuthService,
     private fb: FormBuilder,
     private router :Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  submitForm() {
    this.service.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      if(res.userId != null) {
        const user = {
          id: res.userId,
          role: res.userRole
        };
        console.log(user);
        StorageService.saveToken(res.jwt);
        StorageService.saveUser(user);
        if(StorageService.isAdminLoggedIn()) {
          this.router.navigateByUrl("admin/dashboard");
        } else if (StorageService.isCustomerLoggedIn()) {
          this.router.navigateByUrl("customer/dashboard");
        }
      } else {
        console.log("wrong credentials");
      }
    });
  }
}