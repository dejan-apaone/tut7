import {Component} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {UnlessDirective} from './unless.directive'


@Component({
    selector: 'my-structural-directives',
    template: `
        <h2>Structural directives</h2>
        <section class="directive">
            <h3>*bgIf</h3>
            <div>
                Enter a number hier then 10
                <br>
                <input type="text" #number (keyup)="0">
            </div>
            <div *ngIf="number.value > 10">
                <h3>Test H</h3>
                Number is grater then 10
            </div>
        </section>
        <section class="directive">
            <h3>*bgFor</h3>
            <div>
                <ul>
                    <li *ngFor="#item of list, #i = index">{{i}}. {{item}}</li>
                </ul>   
            </div>
        </section>
        <section class="directive">
            <h3>ngSwitch</h3>
            <div>
                Enter red, blue or green
                <br>
                <input type="text" #color (keyup)="0"> 
            </div>
            <div [ngSwitch]="color.value">
                <template [ngSwitchWhen]="'red'"]><span style="color:red">Color is Red</span></template>
                <template [ngSwitchWhen]="'blue'"]><span style="color:blue">Color is Blue</span></template>
                <template [ngSwitchWhen]="'green'"]><span style="color:green">Color is Green</span></template>
                <template ngSwitchDefault><span >No color</span></template>
            </div>
        </section>
        <section class="directive">
            <h3>Custom Structural Directive *myUnless</h3>
            <div>
                Enter true or false
                <input type="text" #condition (keyup)="0"> 
            </div>
            <div *myUnless="condition.value != 'false'">Only show if "false" is entered</div>
        </section>
    `,
    directives:[UnlessDirective]

})

export class StructuralDirectivesComponent {
   list = [
       'Apple',
       'Milk',
       'Bread'
   ]
}