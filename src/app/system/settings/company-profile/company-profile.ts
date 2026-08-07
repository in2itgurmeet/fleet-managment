import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-profile',
  imports: [FormsModule],
  templateUrl: './company-profile.html',
  styleUrl: './company-profile.scss',
})
export class CompanyProfile {
  brandColor: string = '#2563eb';
  logoUrl: string | ArrayBuffer | null = null;

  constructor(private cdr: ChangeDetectorRef) {}
  onLogoUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.logoUrl = reader.result;
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    }
  }

  removeLogo() {
    this.logoUrl = null;
  }
}
