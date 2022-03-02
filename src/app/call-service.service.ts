import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallServiceService {
  arrChange=new Subject<any>();
  recipeTitle=new Subject<any>();

  constructor() { }
  
  private calls:object[]=[];
  private call=[];
  private callTitles=[]

  
 async onClick(){
   const resp= await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=1eb17c39-8b1e-4e5e-8c06-4a21706f29c9")
.then(response => {
   return response.json();
}).then(recipes=>{
  
  
  this.calls.push(recipes);
  this.call=[...recipes.data.recipes];
  this.callTitles=this.call.map((call)=>{
    return call.title;  })
   this.arrChange.next(this.getCalls());
   	this.recipeTitle.next(this.getCall());
})
.catch(err => {
	console.error(err);
});
  }

  getCalls(){
    return this.calls.slice();
  }
  getCall(){
    return this.callTitles.slice();
  }



  
}
