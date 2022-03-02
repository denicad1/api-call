import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CallsComponent } from './calls/calls.component';
import { CallDetailsComponent } from './call-details/call-details.component';
import { FormsModule } from '@angular/forms';
import { CallComponent } from './calls/call/call.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CallsComponent,
    CallDetailsComponent,
    CallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
