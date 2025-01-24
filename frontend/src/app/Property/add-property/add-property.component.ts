import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm,NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports : [FormsModule,NgModel],
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

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
