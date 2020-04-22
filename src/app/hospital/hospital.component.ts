import { MatTableModule, MatTableDataSource } from '@angular/material';
import { Hospitaldata } from './../hospitaldata';
import { Covidmain } from './../covidmain';
import { DashService } from './../dash.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  ELEMENT_DATA : Hospitaldata[];
  hosdata:Covidmain;
  displayedColumns: string[] = ['hospital.name','cumulative_local', 'cumulative_foreign','cumulative_total', 'treatment_local', 'treatment_foreign','treatment_total'];
  dataSource = new MatTableDataSource<Hospitaldata>(this.ELEMENT_DATA);

 
  constructor(private dashService: DashService) { }

  ngOnInit() { 
    this.dashService.getCovid().subscribe(
      response =>{
        this.hosdata = response
        this.dataSource.data = this.hosdata.data.hospital_data as Hospitaldata[]
        
       
     },
     error =>{
       alert("error");  
     }
    )
   }
}
