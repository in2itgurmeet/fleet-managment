import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar implements OnInit, OnDestroy {
  @Input() isCollapsed: boolean = false;
  @Input() isMobileOpen: boolean = false;
  @Output() closeMobile = new EventEmitter<void>();

  private routerSub: Subscription | undefined;

  constructor(public router: Router) {}

  menuSections = [
    {
      title: 'OVERVIEW',
      items: [
        { title: 'Dashboard', icon: 'fa-solid fa-table-cells-large', route: '/dashboard', children: [], isOpen: false }
      ]
    },
    {
      title: 'LOGISTICS',
      items: [
        {
          title: 'Shipment', icon: 'fa-solid fa-cube', route: '/shipments', isOpen: true,
          children: [
            { title: 'All Shipments', route: '/shipments/all-shipments' },
            { title: 'Create Shipment', route: '/shipments/create' },
            { title: 'Shipment Details', route: '/shipments/details' },
            { title: 'Shipment Tracking', route: '/shipments/tracking' }
          ]
        },
        {
          title: 'Parcel Operations', icon: 'fa-solid fa-boxes-stacked', route: '/parcel-operations', isOpen: false,
          children: [
            { title: 'Incoming Parcels', route: '/parcel-operations/incoming' },
            { title: 'Outgoing Parcels', route: '/parcel-operations/outgoing' },
            { title: 'Returns', route: '/parcel-operations/returns' },
            { title: 'Failed Deliveries', route: '/parcel-operations/failed-deliveries' }
          ]
        },
        {
          title: 'Orders', icon: 'fa-solid fa-bag-shopping', route: '/orders', isOpen: false,
          children: [
            { title: 'All Orders', route: '/orders/all' },
            { title: 'New Orders', route: '/orders/new' },
            { title: 'Processing Orders', route: '/orders/processing' },
            { title: 'Completed Orders', route: '/orders/completed' }
          ]
        }
      ]
    },
    {
      title: 'PEOPLE',
      items: [
        {
          title: 'Customers', icon: 'fa-solid fa-user-group', route: '/customers', isOpen: false,
          children: [
            { title: 'Customer List', route: '/customers/list' },
            { title: 'Customer Details', route: '/customers/details' }
          ]
        },
        {
          title: 'Riders & Drivers', icon: 'fa-solid fa-motorcycle', route: '/riders-drivers', isOpen: false,
          children: [
            { title: 'Rider List', route: '/riders-drivers/riders' },
            { title: 'Driver Tracking', route: '/riders-drivers/tracking' },
            { title: 'Performance', route: '/riders-drivers/performance' }
          ]
        }
      ]
    },
    {
      title: 'FLEET & NETWORK',
      items: [
        {
          title: 'Fleet', icon: 'fa-solid fa-truck', route: '/fleet', isOpen: false,
          children: [
            { title: 'Vehicles', route: '/fleet/vehicles' },
            { title: 'Vehicle Maintenance', route: '/fleet/vehicle-maintenance' }
          ]
        },
        {
          title: 'Routes', icon: 'fa-solid fa-route', route: '/routes', isOpen: false,
          children: [
            { title: 'Route Planning', route: '/routes/planning' },
            { title: 'Route Optimization', route: '/routes/optimization' }
          ]
        },
        {
          title: 'Warehouses', icon: 'fa-solid fa-warehouse', route: '/warehouses', isOpen: false,
          children: [
            { title: 'Warehouse List', route: '/warehouses/list' },
            { title: 'Inventory', route: '/warehouses/inventory' }
          ]
        }
      ]
    },
    {
      title: 'FINANCE',
      items: [
        {
          title: 'Payments', icon: 'fa-regular fa-credit-card', route: '/payments', isOpen: false,
          children: [
            { title: 'Transactions', route: '/payments/transactions' },
            { title: 'COD Management', route: '/payments/cod-management' },
            { title: 'Invoices', route: '/payments/invoices' }
          ]
        },
        {
          title: 'Reports', icon: 'fa-solid fa-chart-column', route: '/reports', isOpen: false,
          children: [
            { title: 'Delivery Reports', route: '/reports/delivery' },
            { title: 'Revenue Reports', route: '/reports/revenue' },
            { title: 'Rider Reports', route: '/reports/riders' }
          ]
        }
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { title: 'Settings', icon: 'fa-solid fa-gear', route: '/settings', children: [], isOpen: false },
        { title: 'Support', icon: 'fa-solid fa-headset', route: '/support', children: [], isOpen: false }
      ]
    }
  ];

  ngOnInit() {
    // Check initial route
    this.updateActiveMenu(this.router.url);

    // Listen to route changes
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateActiveMenu(event.urlAfterRedirects);
      });
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  updateActiveMenu(url: string) {
    for (const section of this.menuSections) {
      for (const item of section.items) {
        if (item.children && item.children.length > 0) {
          // Check if any child route matches the current URL
          const isChildActive = item.children.some((child: any) => url.includes(child.route));
          if (isChildActive) {
            item.isOpen = true; // Auto open the dropdown if a child is active
          }
        }
      }
    }
  }

  onMenuClick() {
    // When a route is clicked, close the mobile menu
    if (window.innerWidth <= 768) {
      this.closeMobile.emit();
    }
  }

  toggleMenu(item: any) {
    if (item.children && item.children.length > 0) {
      if (this.isCollapsed) {
        // Handle collapse behavior if needed
      }
      item.isOpen = !item.isOpen;
    }
  }
  
  // Helper to check if a dropdown should be styled as active
  isMenuActive(item: any): boolean {
    if (!item.children || item.children.length === 0) {
      return this.router.url === item.route;
    }
    return item.children.some((child: any) => this.router.url.includes(child.route));
  }
}
