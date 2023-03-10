import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="Your perfect banking partner"  // string interpollation

  data1="Enter your account number"    // property binding

  acno:any   //define type of all arguements

  psw:any    //define type of all arguements

  // userDetails:any={
  //   1000:{username:"anu",acno:1000,password:"abc123",balance:0},
  //   1001:{username:"amal",acno:1000,password:"abc123",balance:0},
  //   1002:{username:"arun",acno:1000,password:"abc123",balance:0},
  //   1003:{username:"megha",acno:1000,password:"abc123",balance:0}


  // }

  constructor(private router:Router, private ds:DataService){}


  // methods

  // acnoChange(event:any){                  //$event binding  define type of all arguements
    // this.acno=event.target.value
    // console.log(this.acno);

    // console.log(event);
    
    
  // }

  // pswChange(event:any){
  //   this.psw=event.target.value

  //   console.log(this.psw);
    
  // }

  login(){                                //event binding

    var acno=this.acno
    var psw=this.psw

    
    // alert('login worked')

    // if(acno in userDetails){
    //   if(psw==userDetails[acno]["password"]){
    //     alert('login success')
        // redirection

    //     this.router.navigateByUrl("dashboard")

    //   }
    //   else{
    //     alert('incorrect password')
    //   }
      
    // }
    // else{
    //   alert('incorrect account number')
    // }


    const result=this.ds.login(acno,psw)

    if(result){
      alert("login success")

      this.router.navigateByUrl("dashboard")

    }
    else{
      alert("incorrect account number or password")

      this.router.navigateByUrl("")

    }

  }

}


