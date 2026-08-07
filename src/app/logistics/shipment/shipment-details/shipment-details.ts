import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-shipment-details',
  standalone: true,
  imports: [CommonModule, RouterModule, CatsDataGridComponent],
  templateUrl: './shipment-details.html',
  styleUrls: ['./shipment-details.scss']
})
export class ShipmentDetails implements OnInit {
  
  shipment = {
    id: 'PP-48213',
    status: 'In Transit',
    createdDate: 'Jun 18, 2026 - Express',
    estimatedDate: 'Jun 20',
    service: 'Express',
    weight: '2.5 kg',
    cod: '$48.00',
    distance: '412 mi'
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
      status: 'Shipment created',
      description: 'Booking confirmed',
      date: 'Jun 18, 2026',
      time: '11:10 AM',
      color: '#94a3b8',
      isActive: false
    }
  ];

  parcelItems = [
    { item: 'Wireless Headphones', qty: 1, weight: '0.4 kg', value: '$28.00' },
    { item: 'Phone Case (x2)', qty: 2, weight: '0.1 kg', value: '$12.00' },
    { item: 'Charging Cable', qty: 1, weight: '0.2 kg', value: '$8.00' }
  ];

  colDefs = [
    { headerName: 'ITEM', fieldName: 'item', width: 200 },
    { headerName: 'QTY', fieldName: 'qty', width: 100 },
    { headerName: 'WEIGHT', fieldName: 'weight', width: 100 },
    { headerName: 'VALUE', fieldName: 'value', width: 100 }
  ];

  rider = {
    name: 'Marcus Bell',
    vehicle: 'Bike',
    zone: 'Zone A',
    rating: '4.9',
    image: 'assets/images/avatar.jpg'
  };

  parties = {
    sender: {
      name: 'Acme Warehouse',
      address: '142 Industrial Ave, Los Angeles, CA 90001',
      phone: '+1 555 000 1234'
    },
    recipient: {
      name: 'Kathryn Murphy',
      address: '88 Park Avenue, New York, NY 10001',
      phone: '+1 555 987 6543'
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
