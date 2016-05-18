import {Component} from 'angular2/core';

@Component({
    selector: "my-puzzle",
    template: `
<div id="puzzle">
<section class="setup">
            <h2>Game setup</h2>
            Enter your name:
            <input type="text" #name>
        </section>
        <section class="game">
           <h2>The puzzle</h2>
           <p>Welcome <span class="name">xxx</span> </p>
           <br>
           Switch 1 :
           <input type="text">
           <br> 
           Switch 2 :
           <input type="text">
           <br> 
           Switch 3 :
           <input type="text">
           <br> 
           Switch 4 :
           <input type="text">
           <br> 
          
        </section>
        <section class=" ">
            <h2>Congratulation xxx. You salved it!</h2>
        </section>
</div>
        
    `
})

export class PuzzleComponent {

}