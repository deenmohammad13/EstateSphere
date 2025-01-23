import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  imports : [RouterLink],
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router : Router) { }

  public propertyId!:number;
  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);

    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];  
        // + is used for convert string into number
      }
    );
  }

  onSelectNext(){
    this.propertyId+= 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }

}
