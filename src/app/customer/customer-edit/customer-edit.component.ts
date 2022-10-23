import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm:FormGroup=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    age:new FormControl(),
    address:new FormControl(),
  })

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }
    submit(){
    const customer=this.customerForm.value;
    this.customerForm.reset();
    }
}
