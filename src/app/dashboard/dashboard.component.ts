import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user:any
  
  data="Your perfect banking partner"  // string interpollation

  acno:any
  psw:any
  amnt:any

  acno1:any
  psw1:any
  amnt1:any


  constructor(private ds:DataService){
    this.user=this.ds.currentUser
  }

  deposit(){

    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt

    const result=this.ds.deposit(acno,psw,amnt)

    if(result){
      alert(`Your account has been credited with ${amnt} and the
      available balance is ${result}`)
    }
    else{
      alert('Incorrect account number or password')
    }

  }


  withdraw(){

    var acno1=this.acno1
    var psw1=this.psw1
    var amnt1=this.amnt1

    const result=this.ds.withdraw(acno1,psw1,amnt1)

    if(result){
      alert(`Your account has been debited with ${amnt1} and the
      available balance is ${result}`)
    }

    else{
      alert('Incorrect account number or password')
    }

  }

}
