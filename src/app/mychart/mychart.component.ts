import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartType } from 'chart.js';
//import{ PointStyle, ChartType} from 'chart.js';
import { MultiDataSet, Label, Color} from 'ng2-charts';
import { ChartServiceService, StatHopitalisation } from '../Services/chart-service.service';
import * as Highcharts from 'highcharts';
import { error } from '@angular/compiler/src/util';
import * as Chart from 'chart.js';

//===============
declare var require: any;
@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {
  ctx:any;
  context1:any;
  context3:any;
  context2:any;
  canva:any;
  

 public nbGuerris;
        statHospistalisations: StatHopitalisation [];
        nomsrv="";
        hospitalisations;
        listnomsrv=[];
        public servicename=[];
        sr=[{
          name: "",
          type: 'pie',
          radius: [30, 110],
        //  roseType: this.nomsrv,
          data: []
        }];
 public nbdeces;
 public servicesNames
 public tauxlitService;
 public taxulitservices=[];

 public TousAnnes:any=[];
 annes="";
 tousMoisAnnes:any=[];
 listConsultationService=[];
 options5 :any;
   //================================
    doughnutChartLabels: Label[] = [];
    doughnutChartLabels1:any ;
    doughnutChartData;
    doughnutChartData1=[];
    doughnutChartData2=[];
    doughnutChartData3=[];
    doughnutChartData4=[];
    somme=[];
    doughnutChartType1: ChartType = 'doughnut';
   // type PointStyle = 'circle'
    doughnutChartType: ChartType = 'doughnut';
   //=====================================================================
   //====================+++++++++++++++++++++++++

   ngOnInit(): void {
    this.toutesDates();
    let anne:number=2020;
    this.getServicesNames();
    debugger
      this.ChartMA();
      
     
    

    
    
      this.consultationServiceName();
     
 console.log(this.listConsultationService)
  }

   public options4: any = {
              Chart: {
                type: 'area',
                height: 250
              },
              title: {
                text: 'Evolution  Hopital Cheikh Zayed'
              },
              credits: {
                enabled: false
              },
              xAxis: {
                categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
              series: [{
                name: 'Urgence',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Pediatrie',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'Maternite',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }]
  }

   //+++++++++++++++++++++++++++++++++++++++++

 constructor( private chartServiceService: ChartServiceService,
    private router:Router) {   }

  DiagrammeNbrGerie(annes){
    this.chartServiceService.diagrammeNbreGerires(annes).subscribe(
      (resp:any)=>{  
        const rs=resp;
        this.doughnutChartData1.push(rs);    
        console.log(this.doughnutChartData1);
        if(document.getElementById('pie-chart')){
                const canvas=document.getElementById('pie-chart');
                this.ctx=canvas;
                new Chart(this.ctx, {
                            type: 'pie',
                            data: {
                                      labels: ["Nombre des geries"+""+this.doughnutChartData1],
                                      datasets: [{
                                                  label: "Population (millions)",
                                                  backgroundColor: ["#3e95cd"],
                                                  data:this.doughnutChartData1
                                                }]
                                  },
                            options: { title: {
                                                display: true,
                                                text: 'Bilan Nombre des Patients Guéris L’année  :'+annes
                                              }
                                      }
                            });
    }

    
  }
)

//this.doughnutChartData1=[];
//methode diagramme nbre de Deces 
this.chartServiceService.diagrammeNbreDeces(annes).subscribe(
  (resp:any)=>{  
    const rst=resp;
    this.doughnutChartData2.push(rst);    
    console.log(this.doughnutChartData2);
    if(document.getElementById('pie-chart1')){
  const canvas=document.getElementById('pie-chart1');
  this.context1=canvas;
  new Chart(this.context1, {
    type: 'pie',
    data: {
      labels: ["Nombre Deces"+" "+this.doughnutChartData2],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#4ee2ed"],
        data:this.doughnutChartData2
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Bilan Nombre des Décès L’année'+annes
      }
    }
});
}


}
)
//this.doughnutChartData2=[];

this.chartServiceService.diagrammeNbreConsult(annes).subscribe(
  (resp:any)=>{  
    const rst1=resp;
    this.doughnutChartData3.push(rst1);    
    console.log(this.doughnutChartData3);
    if(document.getElementById('pie-chart2')){
  const canvas=document.getElementById('pie-chart2');
  this.context2=canvas;
  new Chart(this.context2, {
    type: 'pie',
    data: {
      labels: ["Nombre  Consultation "+"  "+this.doughnutChartData3],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#90ed4e"],
        data:this.doughnutChartData3
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Bilan Nombre des Consultations l’année'+annes
      }
    }
});
}


}
)
//this.doughnutChartData3=[];

this.chartServiceService.diagrammeNbreReferer(annes).subscribe(
  (resp:any)=>{  
    const rst2=resp;
    this.doughnutChartData4.push(rst2);    
    console.log(this.doughnutChartData4);
    if(document.getElementById('pie-chart3')){
  const canvas=document.getElementById('pie-chart3');
  this.context3=canvas;
  new Chart(this.context3, {
    type: 'pie',
    data: {
      labels: ["Nombre  Consultation "+"  "+this.doughnutChartData4],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#ed4ea3"],
        data:this.doughnutChartData4
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Bilan Nombre des Réfers L’année'+annes
      }
    }
});
}


}
)

//============




/*


     }

//===========

 DiagrammeNbrReferer(annes){
    this.chartServiceService.diagrammeNbreReferer(annes).subscribe(
      (resp:any)=>{  
        const rs=resp;
        this.doughnutChartData4.push(rs);    
        console.log(this.doughnutChartData4);
        if(document.getElementById('pie-chart3')){
      const canvas=document.getElementById('pie-chart3');
      this.context3=canvas;
      new Chart(this.context3, {
        type: 'pie',
        data: {
          labels: ["Nombre de Réfers "+""+annes],
          datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#4e85ed"],
            data:this.doughnutChartData4
          }]
        },
        options: {
          title: {
            display: true,
            text: 'bilan  des patients Réfers de année'+annes
          }
        }
    });
    }

    
  }
)
//this.doughnutChartData2=[];
*/
     }




     //prandre variable annee  est retourne les mois 
     chercher(anne){this.AnnesMois(anne)}
     //
     AnnesMois(annes){
       this.chartServiceService.DatesAnnes(annes).subscribe(resp=>{
         this.tousMoisAnnes=resp
        console.log(resp)});
     }

     getServiceNamesTauxLit(nom){
       this.chartServiceService.getServicesNamesTauxLit(nom).subscribe(
         resp=>{
           this.tauxlitService=resp;
           this.taxulitservices.push(this.tauxlitService);
         


         }
       );
    


     }


     getServicesNames(){
       this.chartServiceService.getServicesNames().subscribe(Response=>{
      this.servicesNames=Response;
     
  
     for(let servicenom of this.servicesNames){
     
       this.servicename.push(servicenom);
       
       this.getServiceNamesTauxLit(servicenom);}

     for(let sr of this.servicename){
      
        // console.log(ser)
         this.chartServiceService.HospServiceConsultations(sr).subscribe(
           resp=>{
             let ls=[]
             this.nomsrv=sr;
             this.listnomsrv.push(this.nomsrv)
             this.listConsultationService.push(resp);

             this.sr.push({name:sr,type: 'pie',
             radius: [30, 110],data:this.listConsultationService});
             console.log(this.sr)
}
         )
        
         
       }
     
    
     console.log(this.taxulitservices);

       },error=>{
         console.log(error)
       }
     );
 }


    date:Date;
   

  toutesDates(){
    this.chartServiceService.tousDate().subscribe(
      resp=>{        
        this.TousAnnes=resp;
        console.log(resp);
      }
    )    
  }

  
ChartMA(){
  this.chartServiceService.getStatHospitalisationdate().subscribe(

    data => {

      console.log(data);
      this.statHospistalisations = data;
      this.doughnutChartLabels = this.statHospistalisations.map(s => s.label);
      this.doughnutChartData = this.statHospistalisations.map(s => s.nbr) ;
      console.log(this.servicename)

    },err=>{
      console.log(err);
    }
  )
   //+++++++++++++++
  Highcharts.chart('container', this.options4);
  //+++++++++++++++to

   

}


 



 initOpts = {
    renderer: 'svg',
    width: 1000,
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
      left: '0%',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },
    
    xAxis: [
      {
        type: 'category',
        data: this.servicename,
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
      barWidth: '75%',
      data: this.taxulitservices
    }]
  };
//===========================================================
  theme: string;
  initOpts1 = {
    renderer: 'svg',
    width: 250,
    height: 250
  };
  //==================================================  consultationServiceName  Option 5====================
consultationServiceName(){
  this.options5 = {
    title: {
      text: ' Diagram Services',
      subtext: 'Service Data',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
     // formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: this.listnomsrv
    },
    calculable: true,
    series: this.sr
  };

}
  //==================================================  Fin  consultationServiceName  Option 5====================

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
    
  //  data:this.servicename
    
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
        data: this.servicename
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
        data: this.tousMoisAnnes
      },
      {
        name: 'X-2',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
      //  data: [220, 182, 191, 234, 290, 330, 310]
      data:this.tousMoisAnnes
      },
      {
        name: 'X-3',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
      //  data: [150, 232, 201, 154, 190, 330, 410]
      data:this.tousMoisAnnes
      },
      {
        name: 'X-4',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
     //   data: [320, 332, 301, 334, 390, 330, 320]
     data:this.tousMoisAnnes
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
       // data: [820, 932, 901, 934, 1290, 1330, 1320]
       data:this.tousMoisAnnes
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
      { data: [11, 11, 11,78, 108, 77, 75,85, 72, 11, 11, 11], label: 'Taux de Ref' },
        { data: [85, 72, 78, 108, 77, 75,85, 105, 78, 75, 125, 100], label: 'Taux de Hosp' },
        { data: [85, 72, 78, 75, 77, 75,78, 108, 77, 75,85, 72], label: 'Taux de  Deces' },
        { data: [171, 155, 66, 161, 100, 161,152,111,178,125,158], label: 'Taux de GUERRIS' },


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

     // <!-- DEBUT CHART DIFFRENTS DIAGRAMME -->
 
bar(){
if(document.getElementById('pie-chart')){
  const canvas=document.getElementById('pie-chart');
  this.ctx=canvas;
  new Chart(this.ctx, {
    type: 'pie',
    data: {
      labels: ["Africa"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd"],
        data: this.doughnutChartData1
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
}
      
     // <!-- FIN CHART DIFFERENTS DIAGRAMME -->


           }
          }

