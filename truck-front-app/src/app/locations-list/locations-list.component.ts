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
                    placeList.services = placeList.services.map(service => service.name).join(', ')
                }
            )

            console.log(this.placesList);
        })
    }

    evaluatePlace(place: any) {
        const newPlace = new Place(place.name, place.distance, place.services, place.rating, place.types, place.image_name);
        this.placeService.currentPlaceSubject.next(newPlace);
        this.router.navigateByUrl('/evaluate');
    }
}
