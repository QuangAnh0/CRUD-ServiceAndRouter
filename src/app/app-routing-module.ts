import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";



const routes: Routes = [{
  path: 'customer/list',
  component: CustomerListComponent
}, {
  path: 'customer/create',
  component: CustomerCreateComponent
}, {
  path: 'customer/edit',
  component: CustomerEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
