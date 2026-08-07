import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, Sidebar],
  templateUrl: './dashboard-layout.html',
  styleUrls: ['./dashboard-layout.scss']
})
export class DashboardLayout {
  isSidebarCollapsed = false;
  isMobileMenuOpen = false;
  isProfileMenuOpen = false;
  isNotificationsOpen = false;
  isDarkTheme = false;

  notifications = [
    { title: 'Parcel Delivered', desc: 'PP-48213 delivered to Kathryn Murphy', time: '2 min ago', type: 'success', icon: 'fa-solid fa-circle-check' },
    { title: 'Failed Delivery', desc: 'PP-47990 — recipient not available', time: '15 min ago', type: 'warning', icon: 'fa-solid fa-triangle-exclamation' },
    { title: 'New Order', desc: 'Robert Johnson placed order #PP-48260', time: '1 hour ago', type: 'info', icon: 'fa-solid fa-user-plus' }
  ];

  toggleSidebar() {
    if (window.innerWidth <= 768) {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    } else {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
    if (this.isProfileMenuOpen) this.isNotificationsOpen = false;
  }

  toggleNotifications() {
    this.isNotificationsOpen = !this.isNotificationsOpen;
    if (this.isNotificationsOpen) this.isProfileMenuOpen = false;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  reloadPage() {
    window.location.reload();
  }

  onImageError(event: any) {
    event.target.src = 'https://ui-avatars.com/api/?name=John+Doe&background=random';
  }
}
