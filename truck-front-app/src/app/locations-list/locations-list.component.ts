import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";

@Component({
    selector: 'ns-locations-list',
    templateUrl: './locations-list.component.html',
    styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
    _type: string;
    placesList: any;

    @Input() set type(value: string) {
        this._type = value;
        this.getLocations();
    };

    get type(): string {
        return this._type;
    }

    placesListMock = [
        {
            name: "Posto BR 24h",
            distance: 250,
            distanceDisplay: '250m',
            services: "Abastecimento, Banheiro, Chuveiro, alimentação",
            rating: 4,
            types: ['food', 'hygiene']
        },
        {
            name: "Einstein",
            distance: 2540,
            distanceDisplay: '2540m',
            services: "Abastecimento, Banheiro, Chuveiro, alimentação",
            rating: 4,
            types: ['food', 'health']
        },
        {
            name: "Posto de saúde UBS",
            distanceDisplay: "250m",
            distance: 250,
            services: "Hospital/posto de saúde",
            rating: 4,
            types: ['health']
        },
        {
            name: "Posto da Policia Federal",
            distanceDisplay: "1,5km",
            distance: 1500,
            services: "Policiamento",
            rating: 2,
            types: ['safety']
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    private getLocations() {
        // back integration
        this.placesList = this.placesListMock;
        if (this.type) {
            this.placesList = this.placesListMock.filter((place) => {
                return place.types.includes(this.type);
            }).sort((a, b) => {
                return a.distance < b.distance ? -1 : 1;
            });
        }
    }

}
