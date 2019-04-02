declare var myChart: any;
declare var barChart: any;
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { RestApiService } from "../shared/rest-api.service";
import { QuoteService } from './quote.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  
  //declare var myChart: any;
  constructor(private quoteService: QuoteService,private restApi:RestApiService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
      
      this.restApi.getEmployeeCount().subscribe((data: {}) => {
        console.log(data);
        var label = [];
        var values = [];
        for(var key in data){
          label.push(key);
          values.push(data[key]);
        }
        new Chart(myChart, {
   type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data:{
     labels:label,
     datasets:[{
       label:'Count',
       data:values,

       //backgroundColor: 'green',
       backgroundColor:[
         '#e65100',
         '#e65100',
         '#f57c00',
         '#fb8c00',
         '#ff9800',
         '#ffa726',
         '#ffb74d',
         '#ffcc80',
         '#ffe0b2',
         '#fff3e0'
       ],
       borderWidth:1,
       borderColor:'white',
       hoverBorderWidth: 3,
       hoverBorderColor: 'grey'
     }]
   },
   options:{
     title:{
       display: true,
       text: 'Sample Pie-Chart',
       fontSize:20
     },
     legend:{
       display:true,
       position:'right',
       labels:{
         fontColor: '#000'
       }
     },
     layout:{
       padding:{
         left:0,
         right:0,
         bottom:0,
         top:0
       }
     },
     tooltips:{
       enabled:true
     }
   }
 });

    new Chart(barChart, {
   type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data:{
     labels:label,
     datasets:[{
       //label:'Count',
       data:values,

       //backgroundColor: 'green',
       backgroundColor:[
         '#e65100',
         '#e65100',
         '#f57c00',
         '#fb8c00',
         '#ff9800',
         '#ffa726',
         '#ffb74d',
         '#ffcc80',
         '#ffe0b2',
         '#fff3e0'
       ],
       borderWidth:1,
       borderColor:'white',
       hoverBorderWidth: 3,
       hoverBorderColor: 'grey'
     }]
   },
   options:{
     title:{
       display: true,
       text: 'Sample Bar-Chart',
       fontSize:20
     },
     legend:{
       display:false,
       position:'right',
       labels:{
         fontColor: '#000'
       }
     },
     layout:{
       padding:{
         left:100,
         right:100,
         bottom:100,
         top:100
       }
     },
     tooltips:{
       enabled:true
     }
   }
 });
      });


      
  }
}
