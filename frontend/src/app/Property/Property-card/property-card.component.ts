import { Component, Input } from '@angular/core';
import { Iproperty } from '../iproperty.interfaces';

@Component({
  selector: 'app-property-card',
  standalone: true,
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
  @Input() property!: Iproperty;

}
