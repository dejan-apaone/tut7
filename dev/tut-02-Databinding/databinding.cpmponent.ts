import {Component} from 'angular2/core';
import {PropertyBindingComponent} from './property-binding.component';

@Component({
    selector: 'databinding-tut',
    template: `
        <h4>String interpolation</h4>
        {{'SI test'}} <br>
        {{1===1}} <br>
        <b> onTest() : </b> {{onTest()}} <br>
        Nanem: <input type="text" value="{{name}}" class="{{'red'}}">
        <h4>Property Binding</h4>
        Nanem: <input type="text" [value]="1===1" class="{{'red'}}"><br>
        Property of directive: <input type="text" [value]="1===1" [ngClass]="{red:true}"><br>
        Property of directive: <input type="text" [value]="1===1" [ngClass]="{red:true}" [disabled]="1===1"><br>
        <h4>Event Binding</h4>
        Reflect input chars : <input type="text" [value]="1===1" [ngClass]="{red:true}" (keyup)="onKeyup(inputElement.value)" #inputElement><br>
        <p>{{values}}</p>
        <h4>Two-Way Data binding</h4>
        <input type="text"  [(ngModel)]="name" ><br>
        <p>Your name: <b>{{name}}</b></p>
        <h4>Using Property Binding with a custom Component</h4>
        <section class="parent">
            <h3>This is the Parent component</h3>
            <h4>Please enter your name</h4>
            <input type="text" [(ngModel)]="name1">
           
            <section class="child">
                <my-property-binding 
                    [myName]="name1" 
                    [myAge]="26"
                    (hobbiesChanged)="hobbies = $event"></my-property-binding>
            </section>
            <p>My hobbies are:{{hobbies}}</p>
        </section>
        
    `,
    directives: [PropertyBindingComponent]
})

export class DatabindingCpmponent {
    //  String interpolation
    name = 'Max';
    values = '';

    onTest() {
        return 1 === 1;
    }

    //  Property Binding

    //  Event Binding
    onKeyup(value:string) {
        this.values += value + ' | ';
    }

    //  Two-Way Data binding


    name1 = '';
    hobbies = '';

}
