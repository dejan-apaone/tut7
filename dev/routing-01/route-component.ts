import {Component, OnInit} from 'angular2/core';
import {Http, Response} from 'angular2/http';

@Component({
    selector: 'my-route',
    template: `
        <h2>Basic Request</h2>
        <!--<button type="button" (click)="makeRequest()">Make Request</button>-->
        <div *ngIf="loading">loading...</div>
        
        <div class="user" *ngFor="#user of data">
            <div ><a href="user{{user.id}}">{{user.name}}</a></div>
            <br>
        </div>
        <!--<pre>{{data | json}}</pre>-->
    `
})

export class RouteComponent implements OnInit{
    data:Object;
    loading:boolean;

    constructor(public http:Http) {

    }

    //http://jsonplaceholder.typicode.com/
    // makeRequest():void {
    //     this.loading = true;
    //     this.http.request('http://jsonplaceholder.typicode.com/users')
    //         .subscribe((res:Response) => {
    //             this.data = res.json();
    //             this.loading = false;
    //         });
    // }
    ngOnInit():any {
        this.loading = true;
        this.http.request('http://localhost:3000/data/test-users.json')
            .subscribe((res:Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }

}