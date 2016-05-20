import {Component} from 'angular2/core';

import {PuzzleComponent} from './puzzle/puzzle.component';
import {DatabindingCpmponent} from './tut-02-Databinding/databinding.cpmponent';



@Component({
    selector: 'my-app',
    template: `
       <!--<my-puzzle></my-puzzle>-->
       <databinding-tut></databinding-tut>
    `,
    directives:[PuzzleComponent, DatabindingCpmponent]

})
export class AppComponent {

}