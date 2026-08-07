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
          title: 'Shipment', icon: 'fa-solid fa-cube', route: '/logistics/shipments', isOpen: true,
          children: [
            { title: 'All Shipments', route: '/logistics/shipments/all-shipments' },
            { title: 'Create Shipment', route: '/logistics/shipments/create-shipment' },
            { title: 'Shipment Details', route: '/logistics/shipments/shipment-details' },
            { title: 'Shipment Tracking', route: '/logistics/shipments/shipment-tracking' }
          ]
        },
        {
          title: 'Parcel Operations', icon: 'fa-solid fa-boxes-stacked', route: '/logistics/parcel-operations', isOpen: false,
          children: [
            { title: 'Incoming Parcels', route: '/logistics/parcel-operations/incoming-parcels' },
            { title: 'Outgoing Parcels', route: '/logistics/parcel-operations/outgoing-parcels' },
            { title: 'Returns', route: '/logistics/parcel-operations/returns' },
            { title: 'Failed Deliveries', route: '/logistics/parcel-operations/failed-deliveries' }
          ]
        },
        {
          title: 'Orders', icon: 'fa-solid fa-bag-shopping', route: '/logistics/orders', isOpen: false,
          children: [
            { title: 'All Orders', route: '/logistics/orders/all-orders' },
            { title: 'New Orders', route: '/logistics/orders/new-orders' },
            { title: 'Processing Orders', route: '/logistics/orders/processing-orders' },
            { title: 'Completed Orders', route: '/logistics/orders/completed-orders' }
          ]
        }
      ]
    },
    {
      title: 'PEOPLE',
      items: [
        {
          title: 'Customers', icon: 'fa-solid fa-user-group', route: '/people/customers', isOpen: false,
          children: [
            { title: 'Customer List', route: '/people/customers/list' },
            { title: 'Customer Details', route: '/people/customers/details' }
          ]
        },
        {
          title: 'Riders & Drivers', icon: 'fa-solid fa-motorcycle', route: '/people/riders-drivers', isOpen: false,
          children: [
            { title: 'Rider List', route: '/people/riders-drivers/riders' },
            { title: 'Driver Tracking', route: '/people/riders-drivers/tracking' },
            { title: 'Performance', route: '/people/riders-drivers/performance' }
          ]
        }
      ]
    },
    {
      title: 'FLEET & NETWORK',
      items: [
        {
          title: 'Fleet', icon: 'fa-solid fa-truck', route: '/network/fleet', isOpen: false,
          children: [
            { title: 'Vehicles', route: '/network/fleet/vehicles' },
            { title: 'Vehicle Maintenance', route: '/network/fleet/vehicle-maintenance' }
          ]
        },
        {
          title: 'Routes', icon: 'fa-solid fa-route', route: '/network/routes', isOpen: false,
          children: [
            { title: 'Route Planning', route: '/network/routes/planning' },
            { title: 'Route Optimization', route: '/network/routes/optimization' }
          ]
        },
        {
          title: 'Warehouses', icon: 'fa-solid fa-warehouse', route: '/network/warehouses', isOpen: false,
          children: [
            { title: 'Warehouse List', route: '/network/warehouses/list' },
            { title: 'Inventory', route: '/network/warehouses/inventory' }
          ]
        }
      ]
    },
    {
      title: 'FINANCE',
      items: [
        {
          title: 'Payments', icon: 'fa-regular fa-credit-card', route: '/finance/payments', isOpen: false,
          children: [
            { title: 'Transactions', route: '/finance/payments/transactions' },
            { title: 'COD Management', route: '/finance/payments/cod-management' },
            { title: 'Invoices', route: '/finance/payments/invoices' }
          ]
        },
        {
          title: 'Reports', icon: 'fa-solid fa-chart-column', route: '/finance/reports', isOpen: false,
          children: [
            { title: 'Delivery Reports', route: '/finance/reports/delivery' },
            { title: 'Revenue Reports', route: '/finance/reports/revenue' },
            { title: 'Rider Reports', route: '/finance/reports/riders' }
          ]
        }
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { title: 'Settings', icon: 'fa-solid fa-gear', route: '/system/settings', children: [], isOpen: false },
        { title: 'Support', icon: 'fa-solid fa-headset', route: '/system/support', children: [], isOpen: false }
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
