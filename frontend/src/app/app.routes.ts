import { Route } from '@angular/router';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';


export const routes : Route[] = [
    {path : '', component : PropertyListComponent},
    {path : 'rent-property', component : PropertyListComponent},
    {path : 'add-property', component : AddPropertyComponent},
    {path : 'property-detail/:id', component : PropertyDetailComponent},
    {path : '**', component : PropertyListComponent},
    {path : 'user/login', component : UserLoginComponent},
    {path : 'user/register', component : UserRegisterComponent}
  
  ]
