import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";
import {Place, PlaceService} from "~/app/services/place.service";
import {ClientService} from "~/app/services/client.service";
import {Router} from "@angular/router";

@Component({
    selector: 'ns-locations-list',
    templateUrl: './locations-list.component.html',
    styleUrls: ['./locations-list.component.css'],
    moduleId: module.id
})
export class LocationsListComponent implements OnInit {
    private _type: string;
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

    constructor(private router: Router, private placeService: PlaceService, private clientService: ClientService) {
    }

    ngOnInit(): void {
        this.getLocations();
    }

    private getLocations() {
        this.clientService.getLocations().subscribe((r: any) => {
            console.log(r);
            this.placesList = r
            this.placesList.forEach(
                placeList => {
                    placeList.types = placeList.services.map(service => service.name).join(',').split(',')
                    placeList.services = placeList.services.map(service => service.name).join(',')
                }
            )

            console.log(this.placesList);
        })
    }

    evaluatePlace(place: any) {
        const newPlace = new Place(place.name, place.distance, place.services, place.rating, place.types);
        this.placeService.currentPlaceSubject.next(newPlace);
        this.router.navigateByUrl('/evaluate');
    }
}
