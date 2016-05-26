import {Component, EventEmitter} from 'angular2/core';
import {ListItem} from '../list-item';
@Component({
    selector: 'shopping-list-item',
    template: ` 
        <div class="input">
            <label for="item-name">Item name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name">
        </div>
        <div class="input">
            <label for="item-amt">Amount</label>
            <input type="text" id="item-amt" [(ngModel)]="item.amount">
        </div>
        <button class="red" (click)="onDelete()">Delete Item</button>
    `,
    inputs: ['item'],
    outputs: ['removed']
})

export class ShoppingListItemComponent {
    // item:ListItem;
    item = {name: '', amount: 0};

    removed = new EventEmitter<ListItem>();

    onDelete() {
        this.removed.emit(this.item);
    }
}