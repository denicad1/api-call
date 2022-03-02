import { Component, OnInit } from '@angular/core';
import { CallServiceService } from '../call-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private callService:CallServiceService) { }

  ngOnInit(): void {
  }
  testing(){
    this.callService.onClick();
  }

}
