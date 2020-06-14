import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ns-surroundings',
    templateUrl: './surroundings.component.html',
    styleUrls: ['./surroundings.component.css']
})
export class SurroundingsComponent implements OnInit {
    type: string = 'health';

    constructor() {
    }

    ngOnInit(): void {
    }

    getNearLocationsOfType(type: string) {
        this.type = type;
    }

}
