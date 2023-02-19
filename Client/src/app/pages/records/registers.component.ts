import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
})
export class RegistersComponent {
  
  records:any = []

  user = localStorage.getItem("user")

  constructor(private customerServices: CustomerService){}

  ngOnInit(){
    
    if (localStorage.getItem("user") == null){
      window.location.href = "../"
    }

    this.customerServices.getRecords().subscribe(
      {
        next: res => {this.records = res},
        error: err => console.log(err)
      } 
    )
  }

  logOut(){
    localStorage.removeItem("user")
    window.location.href = "../"
  }

}
