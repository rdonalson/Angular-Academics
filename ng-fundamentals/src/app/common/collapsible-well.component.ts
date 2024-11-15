import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
          <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf="visible" select="[well-body]" ></ng-content>
    </div>
    `
})
export class CollapsibleWellComponent {
    @Input() title: string;
    // tslint:disable-next-line: no-inferrable-types
    visible: boolean = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}
