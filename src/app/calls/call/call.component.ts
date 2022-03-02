import { Component, Input, OnInit } from '@angular/core';
import { CallServiceService } from 'src/app/call-service.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {
 @Input() recipeTitle;
  constructor(private callServ:CallServiceService) { }
  
  ngOnInit(): void {
   
  }

}
