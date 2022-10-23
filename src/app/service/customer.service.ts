import { Injectable } from '@angular/core';
import {Customer} from "../customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Customer[] = [{
    id: 1,
    name: "Quang Anh",
    age: 18,
    address: "Ha Noi"
  },
    {
      id: 1,
      name: "Trung",
      age: 20,
      address: "Thai Binh"
    },
    {
      id: 1,
      name: "Thai",
      age: 19,
      address: "Yen Bai"
    },

  ];

  constructor() { }
  getAll(){
    return this.customer;
  }
  addCustomer(customer:Customer){
    this.customer.push(customer);
  }
  deleteCustomer(id: number) {
    const idCustomer = this.customer.findIndex((customer:Customer) => {
      return customer.id === id;
    });
  }
  editCustomer(id:number,customerEdit:Customer){
    const idCustomer=this.customer.findIndex((customer:Customer)=>{
      return customer.id===id;
    })
  }
}
