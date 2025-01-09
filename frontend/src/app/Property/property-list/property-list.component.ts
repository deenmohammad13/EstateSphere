import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../Property-card/property-card.component'; // Import PropertyCardComponent
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  standalone:true,
  imports: [CommonModule, PropertyCardComponent],  // Import CommonModule and PropertyCardComponent
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {
  properties: any;

  constructor(private http :HttpClient){

  }

  ngOnInit(): void {
    this.http.get('assets/data/properties.json').subscribe(
      data => {console.log(data);
      this.properties = data;
      }
    );
  }
}
