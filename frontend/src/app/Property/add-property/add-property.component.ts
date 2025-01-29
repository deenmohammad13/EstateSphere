import { Component, OnInit, viewChild } from '@angular/core';
import { FormsModule,NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports : [FormsModule,CommonModule],
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  
  property = {
    name: '',
    type: '',
    price: '',
  };

  constructor(private route: Router) { }

  ngOnInit() {
    
  }

  onBack(){
    this.route.navigate(['/']);
  }

  onSubmit(Form : NgForm){
    console.log('congrats, form submitted');
    console.log(Form);
  }
}
