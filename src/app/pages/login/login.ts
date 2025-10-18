import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from "../../components/primary-input/primary-input";
import { NgOptimizedImage } from "@angular/common";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayout,
    ReactiveFormsModule,
    PrimaryInput,
    NgOptimizedImage
],
providers: [
  LoginService
],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success("Login successfully!"),
      error: () => this.toastService.error("Unexpected error, please try again later!")
    })
  }

  navigate(){
    this.router.navigate(["signup"])
  }
}
