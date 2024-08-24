import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [
  { path: "", component: OverviewComponent },
  { path: "search-employee", component: SearchEmployeeComponent },
  { path: "manage-employee", component: ManageEmployeeComponent },
  { path: "my-account", component: MyAccountComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
