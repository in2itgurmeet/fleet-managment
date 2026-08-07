import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-delivery-reports',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './delivery-reports.html',
  styleUrls: ['./delivery-reports.scss'],
})
export class DeliveryReportsComponent implements AfterViewInit {
  @ViewChild('lineChart') lineChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('doughnutChart') doughnutChartRef!: ElementRef<HTMLCanvasElement>;

  selectedDateFilter = 'Last 12 weeks';
  dateFilters = ['Today', 'This Week', 'This Month', 'This Quarter', 'This Year', 'Last 12 weeks'];

  setDateFilter(filter: string) {
    this.selectedDateFilter = filter;
  }

  stats = [
    {
      title: 'Total Deliveries',
      icon: 'fa-solid fa-box',
      colorClass: 'blue',
      value: '16,932',
      trend: '+5.1%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Success Rate',
      icon: 'fa-regular fa-circle-check',
      colorClass: 'green',
      value: '94.2%',
      trend: '+1.4%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'Avg Delivery Time',
      icon: 'fa-regular fa-clock',
      colorClass: 'yellow',
      value: '1.8 days',
      trend: '-0.2d',
      trendUp: false,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'On-Time Rate',
      icon: 'fa-solid fa-stopwatch',
      colorClass: 'red',
      value: '91.6%',
      trend: '+2.1%',
      trendUp: true,
      chartData: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    }
  ];

  zoneData = [
    { zone: 'Zone A — Downtown', deliveries: '4,210', success: '96.1%', time: '1.4d', trend: '+2.2%', trendUp: true },
    { zone: 'Zone B — North', deliveries: '3,640', success: '93.8%', time: '1.9d', trend: '-1.1%', trendUp: false },
    { zone: 'Zone C — West', deliveries: '3,180', success: '92.4%', time: '2.1d', trend: '-0.8%', trendUp: false }
  ];

  colDefs = [
    { headerName: 'ZONE', fieldName: 'zone', width: 250, customRender: true },
    { headerName: 'DELIVERIES', fieldName: 'deliveries', width: 150 },
    { headerName: 'SUCCESS', fieldName: 'success', width: 150 },
    { headerName: 'AVG TIME', fieldName: 'time', width: 150 },
    { headerName: 'TREND', fieldName: 'trend', width: 120, customRender: true }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initLineChart();
      this.initDoughnutChart();
    }
  }

  initLineChart() {
    const ctx = this.lineChartRef.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
          datasets: [
            {
              label: 'Delivered',
              data: [900, 850, 950, 1000, 980, 1050, 1100, 1050, 1180, 1250, 1280, 1350],
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              borderWidth: 2,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 6,
              fill: true
            },
            {
              label: 'Failed',
              data: [50, 60, 45, 55, 40, 50, 60, 45, 48, 55, 60, 50],
              borderColor: '#ef4444',
              backgroundColor: 'transparent',
              borderWidth: 2,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 6,
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              mode: 'index',
              intersect: false,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              titleColor: '#ffffff',
              bodyColor: '#ffffff',
              padding: 10
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#64748b', font: { size: 10 } }
            },
            y: {
              grid: { color: 'rgba(0, 0, 0, 0.05)' },
              border: { dash: [4, 4] },
              ticks: { color: '#64748b', font: { size: 10 }, stepSize: 500 }
            }
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
          }
        }
      });
    }
  }

  initDoughnutChart() {
    const ctx = this.doughnutChartRef.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Failed', 'Returned', 'Delivered', 'In Transit'],
          datasets: [{
            data: [8, 5, 72, 15],
            backgroundColor: [
              '#ef4444', // Failed (Red)
              '#eab308', // Returned (Yellow)
              '#10b981', // Delivered (Green)
              '#3b82f6'  // In Transit (Blue)
            ],
            borderWidth: 3,
            borderColor: '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '75%',
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              titleColor: '#ffffff',
              bodyColor: '#ffffff',
              padding: 10
            }
          }
        }
      });
    }
  }
}
