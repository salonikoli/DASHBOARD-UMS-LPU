import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  constructor(private router: Router) {}

  onSubmit() {
    alert('Form Submitted!');
    setTimeout(() => {
      this.router.navigate(['/intro']);
    }, 1000);
  }
}
