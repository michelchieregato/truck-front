import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ns-surroundings',
    templateUrl: './surroundings.component.html',
    styleUrls: ['./surroundings.component.css']
})
export class SurroundingsComponent implements OnInit {
    list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20];

    constructor() {
    }

    ngOnInit(): void {
    }

    show(item): void {
        console.log(item);
        console.log(item);
    }

    clickL1() {
        alert('hi')
    }

}
