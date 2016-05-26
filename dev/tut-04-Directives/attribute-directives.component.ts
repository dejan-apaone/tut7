// attribute-directives.component.ts
import  {Component} from 'angular2/core';
import  {HighlightDirective} from './highlight.directive';

@Component({
    selector: 'my-attribute-directive',
    template: `
        <div myHighlight [highlightColor]="'red'">
            Highlight me
        </div>
        <br>
        <div myHighlight [highlightColor]="'yellow'">
            Another Highlight
        </div>
    `,
    directives: [HighlightDirective]
})

export class AttributeDirectivesComponent {

}