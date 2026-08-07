import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-rider-reports',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './rider-reports.html',
  styleUrls: ['./rider-reports.scss'],
})
export class RiderReportsComponent implements AfterViewInit {
  @ViewChild('barChart') barChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('doughnutChart') doughnutChartRef!: ElementRef<HTMLCanvasElement>;

  selectedDateFilter = 'This Month';
  dateFilters = ['Today', 'This Week', 'This Month', 'This Quarter', 'This Year'];

  setDateFilter(filter: string) {
    this.selectedDateFilter = filter;
  }

  stats = [
    {
      title: 'Active Riders',
      icon: 'fa-solid fa-motorcycle',
      colorClass: 'blue',
      value: '48',
      trend: '+4',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Avg Deliveries/Rider',
      icon: 'fa-solid fa-box',
      colorClass: 'green',
      value: '112',
      trend: '+6.1%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'On-Time Rate',
      icon: 'fa-solid fa-stopwatch',
      colorClass: 'yellow',
      value: '91.6%',
      trend: '+1.8%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Avg Rating',
      icon: 'fa-solid fa-star',
      colorClass: 'red',
      value: '4.8',
      trend: '+0.1',
      trendUp: true,
      chartData: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    }
  ];

  riderData = [
    { rank: '1', rider: 'Marcus Bell', deliveries: '142', onTime: '96%', rating: '4.9', earnings: '$3,420' },
    { rank: '2', rider: 'Elena Ortiz', deliveries: '128', onTime: '94%', rating: '4.8', earnings: '$3,080' },
    { rank: '3', rider: 'David Wong', deliveries: '119', onTime: '93%', rating: '4.8', earnings: '$2,860' }
  ];

  colDefs = [
    { headerName: '#', fieldName: 'rank', width: 80 },
    { headerName: 'RIDER', fieldName: 'rider', width: 250, customRender: true },
    { headerName: 'DELIVERIES', fieldName: 'deliveries', width: 150 },
    { headerName: 'ON-TIME', fieldName: 'onTime', width: 150 },
    { headerName: 'RATING', fieldName: 'rating', width: 150, customRender: true },
    { headerName: 'EARNINGS', fieldName: 'earnings', width: 150 }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initBarChart();
      this.initDoughnutChart();
    }
  }

  initBarChart() {
    const ctx = this.barChartRef.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Bell', 'Ortiz', 'Wong', 'Khan', 'Novak', 'Miller', 'Reed'],
          datasets: [{
            label: 'Deliveries',
            data: [142, 128, 119, 105, 96, 88, 74],
            backgroundColor: '#10b981', // Green
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
              ticks: { color: '#64748b', font: { size: 10 }, stepSize: 50 }
            }
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
          labels: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
          datasets: [{
            data: [1, 2, 5, 20, 72],
            backgroundColor: [
              '#ef4444', // 1 Star (Red)
              '#f97316', // 2 Star (Orange)
              '#eab308', // 3 Star (Yellow)
              '#3b82f6', // 4 Star (Blue)
              '#10b981'  // 5 Star (Green)
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
