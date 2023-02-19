import { Component , Input} from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
})
export class RecordComponent {
  @Input() state:any
  @Input() weight:any
  @Input() icon:string = "phonelink_setup"
  @Input() line:string = "1px solid rgb(230,230,230)"
  @Input() class:string = "onHover"
  @Input() overflow:string = "scroll"

  @Input() customerName:string = "Customers"
  @Input() phone:string = "Phones"
  @Input() repairs:string = "Repairs"
  @Input() date:string = "Date"
  @Input() id:any = ""

    token = "P43634FGR3344"
  

  constructor(private customerServices: CustomerService){}

  delete(){
   
    this.customerServices.DeleteRecords(this.id, this.token).subscribe(
      {
        next: res => {
          if (res === "Success"){window.location.reload()}
        },

        error: err => {window.alert("Something is wrong, please reload the page and try again")}
      } 
    )

  }
}
