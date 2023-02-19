import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  API_URL = "http://localhost:4000"

  constructor(private http: HttpClient) { 
  }

  getRecords(){
    return this.http.get(`${this.API_URL}/getCustomerInfo/43WER354DF64`)
  }

  getSingleRecords(id:any){
    return this.http.get(`${this.API_URL}/getCustomerInfo/${id}/43WER354DF64`)
  }

  PostRecords(record:Record){
    return this.http.post(`${this.API_URL}/createCustomerInfo`, record)
  }

  DeleteRecords(id:any, token:any){
    return this.http.delete(`${this.API_URL}/deleteCustomerInfo/${id}/${token}`)
  }

  PutRecords(record:Record){
    return this.http.put(`${this.API_URL}/changeCustomerInfo`,record)
  }


}
