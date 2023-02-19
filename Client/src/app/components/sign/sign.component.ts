import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
})
export class SignComponent {
  @Input() button:any 
  @Input() title:any
  @Input() icon:any
  @Input() submit:any
  
  message:string | SignComponent | object = ""

  userInfo: User = {
    token: "P43634FGR##",
    name: "",
    pass: ""
  }

  constructor(private userServices: UserService){}

  ngOnInit(){
    if (localStorage.getItem("user") !== null){
      window.location.href = "/records"
    }
  }

  send(){
    if (this.submit == "singIn"){
      this.userServices.signIn(this.userInfo).subscribe(
        {
          next: res => {this.message = res; if (res === "Access allowed"){localStorage.setItem("user", this.userInfo.name); window.location.href = "../records"}},
          error: err => console.log(err)
        }
      )
    }
    else
    {
      this.userServices.createUser(this.userInfo).subscribe(
        {
          next: res => {this.message = res; if (res === "User created"){localStorage.setItem("user", this.userInfo.name); window.location.href = "../records"}},
          error: err => console.log(err)
        }
      )
    }
  }

}
