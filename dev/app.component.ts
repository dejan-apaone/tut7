import {Component} from 'angular2/core';



// import {PuzzleComponent} from './puzzle/puzzle.component';
// import {DatabindingCpmponent} from './tut-02-Databinding/databinding.cpmponent';
// import {AttributeDirectivesComponent} from './tut-04-Directives/attribute-directives.component';
// import {StructuralDirectivesComponent} from './tut-04-Directives/structural-directives.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';



@Component({
    selector: 'my-app',
    template: `
       <!--<my-puzzle></my-puzzle>-->
       <!--<databinding-tut></databinding-tut>-->
       <!--<h3>Attribute directive</h3>-->
       <!--<my-attribute-directive></my-attribute-directive>   -->
       <!--<hr>-->
       <!--<h3>Structural directives</h3>-->
       <!--<my-structural-directives></my-structural-directives>-->
        
         
        <header>
            <div class="brand">Shopping List</div>
        </header>
        <div class="body"><shopping-list></shopping-list></div>
    `,
    directives: [ShoppingListComponent]

})


export class AppComponent {

}