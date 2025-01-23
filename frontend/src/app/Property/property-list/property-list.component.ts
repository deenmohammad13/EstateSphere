import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../Property-card/property-card.component'; // Import PropertyCardComponent
import { HousingService } from '../../services/housing.service';
import { error } from 'console';
import { cwd } from 'process';
import { Iproperty } from '../iproperty.interfaces';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-property-list',
  standalone:true,
  imports: [CommonModule, PropertyCardComponent],  // Import CommonModule and PropertyCardComponent
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {

  SellRent = 1;
  properties: Array<Iproperty>=[];

  constructor(private route : ActivatedRoute, private housingService: HousingService){

  }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; // means we are in rent property or in the base property
    }
    this.housingService.getAllProperties(this.SellRent).subscribe({
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

