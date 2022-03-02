import { Component, OnInit } from '@angular/core';
import { CallServiceService } from './call-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'api-call';
  callsList:object[];
  constructor(private callService:CallServiceService){}
  
  ngOnInit(): void {
   this.callsList=this.callService.getCalls();
   this.callService.arrChange.subscribe((calls)=>{
     this.callsList=calls;
   })
  }
}
