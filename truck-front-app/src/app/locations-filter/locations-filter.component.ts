import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-locations-filter',
  templateUrl: './locations-filter.component.html',
  styleUrls: ['./locations-filter.component.css']
})
export class LocationsFilterComponent implements OnInit {
    type: string = 'health';
    title: string;
    onlyFavorites: boolean;
    @Input() set text (value: string) {
        this.title = value;
    };
    @Input() set favorties(value: boolean) {
        this.onlyFavorites = value ? value : false;
    };
    constructor() { }

    ngOnInit(): void {
    }

    getNearLocationsOfType(type: string) {
        this.type = type;
    }

}
