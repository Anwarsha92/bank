import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any

  userDetails:any={
    1000:{username:"Anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"Amal",acno:1000,password:"abc123",balance:0},
    1002:{username:"Arun",acno:1000,password:"abc123",balance:0},
    1003:{username:"Megha",acno:1000,password:"abc123",balance:0}


  }

  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails

    if(acno in userDetails){
      return false                //return bcos service file
    }
    else{
      userDetails[acno]={username:uname,acno,password:psw,balance:0}
      return true
    }

  }

  login(acno:any,psw:any){

    var userDetails=this.userDetails

    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){

        //initialize and store current user

        this.currentUser=userDetails[acno]["username"]
        return true

      }
      else{
        return false

      }
    }
    else{
      return false
      

    }

  }

  deposit(acno:any,psw:any,amnt:any){
    var amount=parseInt(amnt)
    var userDetails=this.userDetails

    if(acno in userDetails){
      if(psw == userDetails[acno]["password"]){
        userDetails[acno]["balance"]+=amount

        console.log(userDetails);
        

        return userDetails[acno]["balance"]
      }
      else{
        return false
      }
    }
    else{
      return false
    }

  }

  withdraw(acno:any,psw:any,amnt:any){
    var amount=parseInt(amnt)
    var userDetails=this.userDetails

    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        if(amount<=userDetails[acno]["balance"]){

          userDetails[acno]["balance"]-=amount

          return userDetails[acno]["balance"]
      
        }
        else{
          alert('Insufficient Balance')
        }
      }
      else{
        return false
      }

    }
    else{
      return false
    }
  }

  constructor(private router:Router) { }
}
