import { Component, OnInit } from '@angular/core';
import {JarvisService} from '../../services/jarvis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password:null
  }

  public error:null;

  constructor(
    private Jarvis: JarvisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.Jarvis.login(this.form).subscribe(
      data=> this.handleResponse(data),
      error=> this.handleError(error)
    );
    //console.log(this.form)
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');

  }

  handleError(error){
    this.error = error.error.error
  }

}
