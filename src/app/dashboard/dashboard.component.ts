import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.usagePerHour();
  }
  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> = [];
  public lineChartType:string = 'line';
  public lineChartOptions:any = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display:false
        }
      }],
      yAxes: [{
        gridLines: {
          display:false
        }
      }]
    }
  };
  public lineChartLegend:boolean = false;

  usagePerHour(): void {
    for(var i = 6; i <= 24; i++) {
      let usage = Math.random()*100;
      this.lineChartLabels.push(i);
      this.lineChartData.push(usage)
    }
  }



}
