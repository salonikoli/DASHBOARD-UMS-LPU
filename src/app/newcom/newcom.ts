import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcom',
  standalone: true,
  templateUrl: './newcom.html',
  styleUrl: './newcom.css'
})
export class NewcomComponent {

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/dashboard']);
  }
}