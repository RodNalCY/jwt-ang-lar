import { Component, OnInit } from '@angular/core';
import {JarvisService} from '../../services/jarvis.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private Jarvis: JarvisService) { }

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation:null
  };

  public error = [];

  ngOnInit(): void {
  }

  onSubmit(){
    this.Jarvis.signup(this.form).subscribe(
       data=> console.log(data),
       error=> this.handleError(error)
     );
     //console.log(this.form)
   }

   handleError(error){
    this.error = error.error.errors
  }

}
