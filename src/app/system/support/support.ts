import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './support.html',
  styleUrls: ['./support.scss'],
})
export class SupportComponent {
  
  supportOptions = [
    {
      title: 'Documentation',
      desc: 'Guides and API references to get you started.',
      icon: 'fa-regular fa-book-open',
      colorClass: 'green'
    },
    {
      title: 'Live Chat',
      desc: 'Chat with an agent in real time, 24/7.',
      icon: 'fa-regular fa-message',
      colorClass: 'blue'
    },
    {
      title: 'Email Support',
      desc: 'Reach us at support@Parcelix.com anytime.',
      icon: 'fa-regular fa-envelope',
      colorClass: 'yellow'
    },
    {
      title: 'Call Us',
      desc: '+1 555 000 1234 - Mon-Fri, 9am-5pm.',
      icon: 'fa-solid fa-phone-volume',
      colorClass: 'red'
    }
  ];

  faqs = [
    {
      q: 'How do I track a shipment?',
      a: 'Open the shipment from the Shipments list and select "Track Live" for real-time updates.'
    },
    {
      q: 'Can I change a delivery address?',
      a: 'Yes, before pickup. Edit the shipment details or contact support to update it in transit.'
    },
    {
      q: 'How are shipping rates calculated?',
      a: 'Rates combine a base rate, weight surcharge, and service fee based on the chosen service type.'
    },
    {
      q: 'What happens to a failed delivery?',
      a: 'The rider reattempts the next business day. You\'ll receive an alert with rescheduling options.'
    },
    {
      q: 'How do I request a refund?',
      a: 'Submit a ticket under the Billing & Payments category and our team will review within 48 hours.'
    }
  ];

}
