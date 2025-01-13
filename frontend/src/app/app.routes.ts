import { Route } from '@angular/router';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';


export const routes : Route[] = [
    {path : '', component : PropertyListComponent},
    {path : 'add-property', component : AddPropertyComponent}
  
  ]
