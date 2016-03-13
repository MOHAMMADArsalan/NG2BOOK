import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { NgFor} from "angular2/common";

@Component({
    selector: "Ng-repeat",
    template: `
    <h4 class="ui horizontal divider header">
 ngStyle with object property from variable
</h4>
  <div>
    <span [style.font-size.px]="fontinput.value">
       font size is  {{fontinput.value}} px
    </span>
</div>
<h4 class="ui horizontal divider header">
 ngStyle with object property from variable
</h4>
<div>
<br/>
    <br/>
    <span [style.font-size.px]="fontinput.value" [ngStyle]="{color: colorinput.value}">
        {{colorinput.value}} text
    </span>
</div>
<div>
    <h4 class="ui horizontal divider header">
style from variable
</h4>
    <div [style.font-size.px]="fontinput.value" [style.height]="fontinput.value" [style.background-color]="colorinput.value" style="color: white;">
        {{ colorinput.value }} background
    </div>
</div>
   <h4 class="ui horizontal divider header">
style from variable
</h4>
<div class="ui input">
    <br/>
    <br/>
    <input type="text" name="color" value="{{color}}" #colorinput>
    <br/>
    <br/>
    <input type="number" name="fontSize" value="{{fontSize}}" #fontinput>
    <br/>
    <br/>
    <button (click)="apply(color , fontSize)">Change Value</button>
</div>
<!--<h2  style="margin : 120px auto;">
               <span *ngIf="choice <=  5">your choice is {{ choice }}</span>
               <span *ngIf="choice > 5">Your Choice is out of list bcoz it greater than 5</span>
              </h2>
              <input type="number" [(ngModel)]="choice">
              <div>
                  <ul [ngSwitch]="choice">
                      <li *ngSwitchWhen="1">first Choice  </li>
                      <li *ngSwitchWhen="2">Second Choice </li>
                      <li *ngSwitchWhen="3">Third Choice </li>
                      <li *ngSwitchWhen="4">Forth Choice </li>
                      <li *ngSwitchWhen="5">Fifth Choice</li>
                      <li *ngSwitchDefault>Plz enter number less than equal to five</li>
                  </ul>
              </div>-->

              `
})

class NgRepeat {
   color: string;
   fontSize: number;
   constructor(){}
   apply(color: string,fontSize: number){
       this.color = color;
       this.fontSize = fontSize;
    }
}

bootstrap(NgRepeat)
