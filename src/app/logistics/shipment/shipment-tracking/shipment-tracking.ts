import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipment-tracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipment-tracking.html',
  styleUrls: ['./shipment-tracking.scss'],
})
export class ShipmentTrackingComponent {
  trackingId = 'PP-48213';
  
  shipment = {
    id: 'PP-48213',
    service: 'Express',
    status: 'Out for delivery',
    estimatedDate: 'Jun 20, 2026',
    estimatedTime: 'by 6 PM'
  };

  trackingEvents = [
    {
      status: 'Out for delivery',
      description: 'Rider Marcus Bell · New York, NY',
      date: 'Jun 19, 2026',
      time: '09:14 AM',
      color: '#3b82f6',
      isActive: true
    },
    {
      status: 'Arrived at delivery hub',
      description: 'Central Hub — NYC',
      date: 'Jun 19, 2026',
      time: '06:10 AM',
      color: '#22c55e',
      isActive: false
    },
    {
      status: 'In transit',
      description: 'Departed West Depot — LA',
      date: 'Jun 18, 2026',
      time: '08:20 PM',
      color: '#22c55e',
      isActive: false
    },
    {
      status: 'Picked up',
      description: 'Acme Warehouse · Los Angeles, CA',
      date: 'Jun 18, 2026',
      time: '02:05 PM',
      color: '#22c55e',
      isActive: false
    },
    {
      status: 'Booked',
      description: 'Shipment created',
      date: 'Jun 18, 2026',
      time: '11:10 AM',
      color: '#22c55e',
      isActive: false
    }
  ];

  recipient = {
    name: 'Kathryn Murphy',
    address: '88 Park Avenue, New York, NY 10001'
  };
}
