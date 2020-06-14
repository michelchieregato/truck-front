import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ns-surroundings',
    templateUrl: './surroundings.component.html',
    styleUrls: ['./surroundings.component.css']
})
export class SurroundingsComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    clickL1() {
        alert('hi')
    }

}
