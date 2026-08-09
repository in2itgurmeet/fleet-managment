import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class ProfileComponent {
  isEditMode = false;

  constructor(private location: Location) { }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  goBack() {
    this.location.back();
  }
}
