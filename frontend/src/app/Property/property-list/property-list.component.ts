import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../Property-card/property-card.component'; // Import PropertyCardComponent
import { HousingService } from '../../services/housing.service';
import { error } from 'console';
import { cwd } from 'process';


@Component({
  selector: 'app-property-list',
  standalone:true,
  imports: [CommonModule, PropertyCardComponent],  // Import CommonModule and PropertyCardComponent
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {
  properties: Array<any>=[];

  constructor(private housingService: HousingService){

  }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe({
        next: (data) => {
            console.log(data);
            this.properties = data;
        },
        error: (error) => {
            console.log('httperror');
            console.log(error);
        },
        complete: () => {
            console.log('Request complete');
        }
    }
  );

  }
}

