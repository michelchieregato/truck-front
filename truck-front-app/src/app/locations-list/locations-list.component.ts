import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";
import {Place, PlaceService} from "~/app/services/place.service";
import {ClientService} from "~/app/services/client.service";

@Component({
    selector: 'ns-locations-list',
    templateUrl: './locations-list.component.html',
    styleUrls: ['./locations-list.component.css'],
    moduleId: module.id
})
export class LocationsListComponent implements OnInit {
    private _type: string;
    placesList: any;
    // placesListMock = [
    //     {
    //         name: "Posto BR 24h",
    //         distance: 250,
    //         distanceDisplay: '250m',
    //         services: "Abastecimento, Banheiro, Chuveiro, alimentação",
    //         rating: 4,
    //         types: ['food', 'hygiene']
    //     }
    // ]

    @Input() set type(value: string) {
        this._type = value;
        this.getLocations();
    };

    get type(): string {
        return this._type;
    }

    constructor(private placeService: PlaceService, private clientService: ClientService) {
    }

    ngOnInit(): void {
        console.log('&&&&&&&&&&');
        this.getLocations();
    }

    private getLocations() {
        // this.clientService.getLocations().subscribe((response) => {
        //     console.log(response);
        // }, error => console.log(error))
        this.clientService.getDestinationsList(false).subscribe((r) => console.log(r))
    }

    evaluatePlace(place: any) {
        const newPlace = new Place(place.name, place.distance, place.services, place.rating, place.types);
        this.placeService.currentPlaceSubject.next(newPlace);
    }

}
