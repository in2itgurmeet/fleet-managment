import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-revenue-reports',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './revenue-reports.html',
  styleUrls: ['./revenue-reports.scss'],
})
export class RevenueReportsComponent implements AfterViewInit {
  @ViewChild('lineChart') lineChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barChart') barChartRef!: ElementRef<HTMLCanvasElement>;

  selectedDateFilter = 'This Year';
  dateFilters = ['Today', 'This Week', 'This Month', 'This Quarter', 'This Year'];

  setDateFilter(filter: string) {
    this.selectedDateFilter = filter;
  }

  stats = [
    {
      title: 'Total Revenue',
      icon: 'fa-solid fa-dollar-sign',
      colorClass: 'blue',
      value: '$842.6K',
      trend: '+14.2%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'COD Collected',
      icon: 'fa-solid fa-money-bill-1-wave',
      colorClass: 'yellow',
      value: '$521.4K',
      trend: '+8.7%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Avg Order Value',
      icon: 'fa-solid fa-cart-shopping',
      colorClass: 'green',
      value: '$45.70',
      trend: '+2.9%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'Growth',
      icon: 'fa-solid fa-arrow-trend-up',
      colorClass: 'red',
      value: '+18.3%',
      trend: 'YoY',
      trendUp: true,
      chartData: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    }
  ];

  monthlyData = [
    { month: 'October', orders: '1,884', revenue: '$86,200', cod: '$55,100', growth: '+4.1%', trendUp: true },
    { month: 'November', orders: '2,140', revenue: '$98,400', cod: '$63,200', growth: '+14.1%', trendUp: true },
    { month: 'December', orders: '2,402', revenue: '$110,800', cod: '$70,400', growth: '+12.6%', trendUp: true }
  ];

  colDefs = [
    { headerName: 'MONTH', fieldName: 'month', width: 250, customRender: true },
    { headerName: 'ORDERS', fieldName: 'orders', width: 150 },
    { headerName: 'REVENUE', fieldName: 'revenue', width: 150 },
    { headerName: 'COD', fieldName: 'cod', width: 150 },
    { headerName: 'GROWTH', fieldName: 'growth', width: 120, customRender: true }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initLineChart();
      this.initBarChart();
    }
  }

  initLineChart() {
    const ctx = this.lineChartRef.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Revenue',
              data: [42, 55, 48, 64, 60, 72, 79, 78, 88, 92, 98, 110], // In thousands
              borderColor: '#10b981',
              backgroundColor: 'transparent',
              borderWidth: 2,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 6,
              fill: false
            },
            {
              label: 'COD',
              data: [28, 35, 30, 40, 38, 48, 52, 49, 58, 55, 63, 70], // In thousands
              borderColor: '#3b82f6',
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
              padding: 10,
              callbacks: {
                label: function(context) {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.y !== null) {
                    label += '$' + context.parsed.y + 'k';
                  }
                  return label;
                }
              }
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
              ticks: {
                color: '#64748b',
                font: { size: 10 },
                stepSize: 20,
                callback: function(value) {
                  return '$' + value + 'k';
                }
              }
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

  initBarChart() {
    const ctx = this.barChartRef.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Standard', 'Express', 'Same-Day', 'International', 'Freight'],
          datasets: [{
            data: [320, 210, 140, 80, 50],
            backgroundColor: [
              '#3b82f6', // Standard (Blue)
              '#10b981', // Express (Green)
              '#a855f7', // Same-Day (Purple)
              '#06b6d4', // International (Cyan)
              '#eab308'  // Freight (Yellow)
            ],
            borderRadius: 4,
            barPercentage: 0.6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
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
              ticks: { color: '#64748b', font: { size: 10 }, stepSize: 100 }
            }
          }
        }
      });
    }
  }
}
