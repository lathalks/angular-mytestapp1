import {Component,Input} from '@angular/core';
@Component({
  selector:'baby',
  templateUrl:'./my.component.html',
 // template:`<h1> i love my baby {{mybabyname}}</h1>`,
  styleUrls:["./my.component.css"]

})

export class  MyComponent {
  @Input()
    mybabyname:string;
 myID:string;
 isDisabled;boolean;
hasError=true;
isSpecial=true;
greeting :string;
successClass="text-success";
dangerClass="text-danger";
speciaClass="text-special";
nameq:string;
constructor()
{
  //this.mybabyname="GAYATHRI B";
}
public messageClasses={
"text-success":!this.hasError,
"text-danger":this.hasError,
"text-special":this.isSpecial
};
greetUser(){
  return "Hello User";
}
  onClick(event)
  {
    this.greeting=event;
    this.mybabyname="gayu";
  }
  logMessage(value)
  {
    console.log(value +"this is the text.")
  }
}


