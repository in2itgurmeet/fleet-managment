import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-shipment',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './create-shipment.html',
  styleUrls: ['./create-shipment.scss'],
})
export class CreateShipment implements OnInit {
  shipmentForm!: FormGroup;

  baseRate = 0.00;
  weightSurcharge = 3.50;
  serviceFee = 2.50;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.shipmentForm = this.fb.group({
      sender: this.fb.group({
        fullName: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        pickupAddress: ['', Validators.required],
        pickupWarehouse: ['Central Hub - NYC', Validators.required],
        pickupDate: ['', Validators.required]
      }),
      recipient: this.fb.group({
        fullName: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        deliveryAddress: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', Validators.required]
      }),
      parcel: this.fb.group({
        weight: ['', Validators.required],
        dimensions: ['', Validators.required],
        quantity: [1, Validators.required],
        description: ['']
      }),
      service: this.fb.group({
        serviceType: ['Standard (3-5 days)', Validators.required],
        paymentMethod: ['Prepaid', Validators.required],
        codAmount: ['0.00']
      })
    });
  }

  get estimatedTotal(): number {
    return this.baseRate + this.weightSurcharge + this.serviceFee;
  }

  onSubmit(): void {
    if (this.shipmentForm.valid) {
      console.log('Shipment created', this.shipmentForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
