import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  acno:any
  uname:any
  psw:any


  constructor(private ds:DataService,private router:Router){

  }


  register(){

    //call the methode from class Dataservice

    var acno=this.acno
    var uname=this.uname
    var psw=this.psw
    
    const result=this.ds.register(acno,uname,psw)

    if(result){
      alert('registered')

      this.router.navigateByUrl("")

    }
    else{
      alert('user already exist')

      this.router.navigateByUrl("")

    }



  }

}
