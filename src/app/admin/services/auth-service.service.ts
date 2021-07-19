import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  registerUrl = "http://localhost:4100/users/adduser";
  loginUrl = "http://localhost:4100/users/login";
  forgotPwdUrl = "http://localhost:4100/users/forgotPwd";
  addInquiryUrl = "http://localhost:4100/inquiry/add";
  constructor(private http: HttpClient) { }

  userRegister(user: any) {
    return this.http.post(this.registerUrl, user, { responseType: 'text' });
  }

  userLogin(loginUserData: any) {
    return this.http.post(this.loginUrl, loginUserData, { responseType: 'text' });
  }

  changePassword(email: any, pwd: any) {
    return this.http.put(this.forgotPwdUrl, { email: email, password: pwd });
  }

  addInquiry(inquiry: any) {
    return this.http.post(this.addInquiryUrl, inquiry, { responseType: 'text' });
  }

}