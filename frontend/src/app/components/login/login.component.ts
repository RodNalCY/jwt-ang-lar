import { Component, OnInit } from '@angular/core';
import {JarvisService} from '../../services/jarvis.service';

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

  constructor(private Jarvis: JarvisService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.Jarvis.login(this.form).subscribe(
      data=> console.log(data),
      error=> this.handleError(error)
    );
    //console.log(this.form)
  }

  handleError(error){
    this.error = error.error.error
  }

}
