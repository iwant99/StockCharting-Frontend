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

  companyForm = this.formBuilder.group({
    name: '',
    code: '',
    ceo:'',
    turnover: 0,
    sectorId: null,
    brief: ''
  });
  sectorForm = this.formBuilder.group({
    name: '',
    brief: ''
  });
  exchangeForm = this.formBuilder.group({
    name: '',
    street: '',
    state:'',
    country: '',
    remarks: '',
    brief: ''
  });

  sectorList:Sector[] = [];
  stockExchangeList : StockExchange[] = [];
  companyList : Company[] = [];

  flag:number = 0;

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

  onSubmitCompany(): void {
    this.httpClient.post("http://localhost:8080/admin/addcompany",this.companyForm.value)
      .subscribe(response => {
        let res:any = response;
        if(res.hasOwnProperty("id")) {
          this.companyList.push(res)
        }
      });
    this.companyForm.reset();}
  onSubmitSector(): void {
    this.httpClient.post("http://localhost:8080/admin/addsector",this.sectorForm.value)
      .subscribe(response => {
        let res:any = response;
        if(res.hasOwnProperty("id")) {
          this.sectorList.push(res)
        }
      });
    this.sectorForm.reset();
  }
  onSubmitExchange(): void {
    this.httpClient.post("http://localhost:8080/admin/addexchange",this.exchangeForm.value)
      .subscribe(response => {
        let res:any = response;
        if(res.hasOwnProperty("id")) {
          this.stockExchangeList.push(res)
        }
      });
    this.exchangeForm.reset();
  }
}
