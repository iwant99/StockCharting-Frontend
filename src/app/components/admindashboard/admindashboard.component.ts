import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

export interface StockExchange{
  id:number
  name:string
  street:string
  state:string
  country:string
  brief:string
  remarks:string
}

export interface  Sector{
  id:number
  name:string
  brief:string
}

export interface Company{
  id:number
  code:number
  turnover:number
  ceo:string
  brief:string
  name:string
  sector:Sector
}

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private httpClient:HttpClient,
              private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/admin/getallexchanges")
      .subscribe(data=> {
        this.stockExchangeList = <StockExchange[]>data
      })

    this.httpClient.get("http://localhost:8080/admin/getallcompanies")
      .subscribe(data=> {
        this.companyList = <Company[]>data
      })
    this.httpClient.get("http://localhost:8080/admin/getallsectors")
      .subscribe(data=> {
        this.sectorList = <Sector[]>data
      })
  }

}
