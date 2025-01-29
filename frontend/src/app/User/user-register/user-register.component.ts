import { Component, OnInit } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { FormsModule,NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports : [FormsModule, CommonModule],
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
