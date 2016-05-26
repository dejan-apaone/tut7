import {Component} from 'angular2/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component';
import {ShoppingListItemComponent} from './shopping-list-item.component';
import {ListItem} from '../list-item';
@Component({
    selector:'shopping-list',
    template:`
        <section>
            New item 
            <br>
            <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
        </section>
        <section>
            <h3>My list</h3>
            <div class="list">
                <ul>
                    <li *ngFor="#listItem of listItems"
                    (click)="onSelect(listItem)">{{listItem.name}} ({{listItem.amount}})</li>
                </ul>
            </div>
        </section>
        <section *ngIf="selectedItem != null">
        Edit items
        <shopping-list-item [item]="selectedItem" (removed)="onRemove($event)"></shopping-list-item>
        
        </section>
    `,

    directives:[ShoppingListNewItemComponent, ShoppingListItemComponent]
})
export class ShoppingListComponent{
    listItems = new Array<ListItem>();

    selectedItem:ListItem;

    onItemAdded(item:ListItem){
        this.listItems.push({name:item.name, amount:item.amount});
    }

    onSelect(item:ListItem){
        this.selectedItem = item;

    }
    onRemove(item:ListItem){
        this.listItems.splice(this.listItems.indexOf(item), 1);
        this.selectedItem = null;
    }
}