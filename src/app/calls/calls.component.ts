import { Component, Input, OnInit } from '@angular/core';
import { CallServiceService } from '../call-service.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent implements OnInit {
  @Input() callItem;
  constructor(private callServ:CallServiceService) { }
  recipeTitles=[];
  ngOnInit(): void {
    
    this.recipeTitles=this.callServ.getCall();
    this.callServ.recipeTitle.subscribe((titles)=>{
      this.recipeTitles=titles.title;
    })
    console.log(this.recipeTitles);
   
  }


}
