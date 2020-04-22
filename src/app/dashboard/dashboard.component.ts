import { Covid } from './../covid';
import { Component, OnInit } from '@angular/core';
import { DashService } from '../dash.service';
import { Covidmain } from '../covidmain';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  covid:Covidmain;
  constructor(private dashService: DashService) { }

  ngOnInit() {
    this.dashService.getCovid().subscribe(
      response =>{
          this.covid = response
          
         
       },
       error =>{
         alert("error");  
       }
      )
    
  }

}
