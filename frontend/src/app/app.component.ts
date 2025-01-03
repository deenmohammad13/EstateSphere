import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from "./Property/Property-card/property-card.component";
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PropertyCardComponent, PropertyListComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
