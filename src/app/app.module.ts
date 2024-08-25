import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { OverviewComponent } from './overview/overview.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainSectionComponent,
    OverviewComponent,
    SearchEmployeeComponent,
    ManageEmployeeComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
