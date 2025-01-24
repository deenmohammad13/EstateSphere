import { Component, NgModule } from '@angular/core';
import { RouterOutlet,provideRouter } from '@angular/router';
import { PropertyCardComponent } from './Property/Property-card/property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
        RouterOutlet, 
        PropertyCardComponent, 
        PropertyListComponent, 
        NavBarComponent, 
        AddPropertyComponent,
        FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected typo (styleUrl -> styleUrls)
})
export class AppComponent {
  title = 'frontend';
}


