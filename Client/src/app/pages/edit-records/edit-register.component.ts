import { Component,Input } from '@angular/core';
import { Record } from 'src/app/models/interface';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-register',
  templateUrl: './edit-register.component.html',
})
export class EditRegisterComponent {

  title:string = "Create new record"
  button:string = "Create"

  date= new Date()


  message:any = ""


  constructor(private recordService: CustomerService, private activeRoute: ActivatedRoute){}

  routeParam:any = this.activeRoute.snapshot.paramMap.get('id');

  record: Record = {
    token: "P43634FGR##",
    customer: "",
    phone: "",
    repairs: "",
    datee: this.date.getFullYear() + "-" + this.date.getMonth() + "-" + this.date.getDate()+ " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds(),
    id: this.routeParam
  }

  save(){
    if(this.routeParam == 0){
    this.recordService.PostRecords(this.record).subscribe(
      {
        next: res => {this.message = res; if (res === "Success"){window.location.href = "../records"}},
        error: err => window.alert("Something is wrong, please reload the page and try again")
      }
    )
}
else
{
  this.recordService.PutRecords(this.record).subscribe(
    {
      next: res => {this.message = res; if (res === "Success"){window.location.href = "../records"}},
      error: err => window.alert("Something is wrong, please reload the page and try again")
    }
  )
}}

  ngOnInit(){
    if (localStorage.getItem("user") == null){
      window.location.href = "../"
    }
    if (this.routeParam != 0){
      this.title = "Edit"
      this.button = "Save"
      this.recordService.getSingleRecords(this.routeParam).subscribe(
        {
          next: (res:any) => {if(res.length === 0){window.location.href = "../records"}else{this.record.customer = res[0].customer; this.record.phone = res[0].phone; this.record.repairs = res[0].repairs}},
          error: err => console.log(err)
        }
      )
    }
  }

}
