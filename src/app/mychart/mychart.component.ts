import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ChartServiceService, StatHopitalisation } from '../Services/chart-service.service';
//===============

//===============

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {

 public nbGuerris;
        statHospistalisations: StatHopitalisation [];
 public nbdeces;
;

    //================================
   
    doughnutChartLabels: Label[] = [];
    doughnutChartData;
    doughnutChartType: ChartType = 'doughnut';
   //=====================================================================

 constructor( private chartServiceService: ChartServiceService,
    private router:Router) {
      
     }
    date:Date;
   
  ngOnInit(): void {
    debugger
      
    this.chartServiceService.getStatHospitalisation('2020-01-01').subscribe(
      data => {
        //alert(data);
        //this.nbGuerris = data;
        console.log(data);
        this.statHospistalisations = data;
        this.doughnutChartLabels = this.statHospistalisations.map(s => s.label);
        this.doughnutChartData = this.statHospistalisations.map(s => s.nbr) ;

      },err=>{
        console.log(err);
      }
    )
     /* this.chartServiceService.getNbDeces('2019-09-12').subscribe(
        data1 => {
         // console.log(data1)
          debugger
          this.nbdeces =data1
         // alert(this.nbdeces)
        },err=>{
           // alert('No')
            console.log(err);
          }
        
      )*/
     
     

     
 
  }
//methode pour recuperer le nbdesec
//chartReady = true;

 /*nbrDeces(){
  
          this.chartServiceService.getNbDeces('2019-09-12').subscribe(
        data1 => {
         //console.log(data1)
          debugger
          this.nbdeces =data1
         alert(this.nbdeces)
        },err=>{
           // alert('No')
            console.log(err);
          }
        
      )

   this.doughnutChartLabels=  ['Services', 'Lits', 'Poste'];
  this. doughnutChartData= [ [this.nbdeces, 45, 40]];
   this.doughnutChartType,this.ChartType = 'doughnut';
  }*/
 
  


 initOpts = {
    renderer: 'svg',
    width: 250,
    height: 250
  };

  options = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'Counters',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }]
  };
//===========================================================
  theme: string;
  initOpts1 = {
    renderer: 'svg',
    width: 250,
    height: 250
  };

  options5 = {
    title: {
      text: ' Diagram Services',
      subtext: 'Service Data',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['Urologie', 'Urgence', 'Pediatrie', 'Chirurgie', 'Genyco', 'Orl', 'MedecinIntern', 'Pathologies']
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'Urologie' },
          { value: 5, name: 'Urgence' },
          { value: 15, name: 'Pediatrie' },
          { value: 25, name: 'Chirurgie' },
          { value: 20, name: 'Genyco' },
          { value: 35, name: 'Orl' },
          { value: 30, name: 'Pathologies' },
          { value: 40, name: 'MedecinIntern' }
        ]
      }
    ]
  };

  //=============================================


  isLoading = false;
  options2 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'X-1',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'X-2',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'X-3',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'X-4',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'X-5',
        type: 'line',
        stack: 'counts',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  //===============================================

  
    chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
           chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    


 lineChartData: ChartDataSets[] = [
  // { data: [this.chartServiceService.getNbGuerris(Date)], label: 'NOMBRE GUERRIS' },
      { data: [11, 11, 11,78, 108, 77, 75,85, 72, 11, 11, 11], label: 'NOMBRE Ref' },
        { data: [85, 72, 78, 108, 77, 75,85, 72, 78, 75, 77, 75], label: 'NOMBRE GUERRIS' },
        { data: [85, 72, 78, 75, 77, 75,78, 108, 77, 75,85, 72], label: 'NOMBRE Deces' },
        { data: [171, 155, 66, 161, 100, 161,152,111,178,125,158], label: 'NOMBRE Hosp' },


      ];
    
      lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','January', 'February', 'March', 'April', 'May', 'June'];
    
      lineChartOptions = {
        responsive: true,
      };
    
      lineChartColors: Color[] = [
        {
          borderColor: 'black',
          backgroundColor: 'rgba(255,255,0,0.28)',
        },
      ];
    
      lineChartLegend = true;
      lineChartPlugins = [];
      lineChartType = 'line';



           }

