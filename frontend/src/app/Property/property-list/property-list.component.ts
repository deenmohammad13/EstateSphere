import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../Property-card/property-card.component'; // Import PropertyCardComponent

@Component({
  selector: 'app-property-list',
  standalone: true,  // Declare this as a standalone component
  imports: [CommonModule, PropertyCardComponent],  // Import CommonModule and PropertyCardComponent
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  properties: Array<any> = [
    { "Id": 1, "Name": "Birla House", "Type": "House", "Price": 12000 },
    { "Id": 2, "Name": "Erose Villa", "Type": "House", "Price": 15000 },
    { "Id": 3, "Name": "Home Heaven", "Type": "House", "Price": 18000 },
    { "Id": 4, "Name": "Eco Cottage", "Type": "House", "Price": 12000 },
    { "Id": 5, "Name": "The Lodge", "Type": "House", "Price": 15000 },
    { "Id": 6, "Name": "Little Valley", "Type": "House", "Price": 20000 }
  ];
}
