import { Component, OnInit } from '@angular/core';
import {ClientService} from '~/app/services/client.service'
import {Router} from "@angular/router";

@Component({
  selector: 'ns-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
    currentPlace: string;
    destination: string;
    currentPlaceLocation = 'teste';
    destinationLocation = 'tesnaos';
    fromLatitude = -23.350396;
    fromLongitude = -46.797085;
    toLatitude = 22.2176;
    toLongitude = 49.9505;
    constructor(private clientService: ClientService, private router: Router) {
    }

    ngOnInit(): void {
    }

    navigateToSurroundings() {
        this.router.navigateByUrl('/surrounding')
    }

    submitDestination() {
        this.clientService.createDestination({
            from_name: this.currentPlace,
            from_location: this.currentPlaceLocation,
            to_name: this.destination,
            to_location: this.destinationLocation,
            to_latitude: this.toLatitude,
            to_longitude: this.toLongitude,
            from_latitude: this.fromLatitude,
            from_longitude: this.fromLongitude,
        }).subscribe(
            (response) => {
                this.navigateToSurroundings();
            },
            (err) => {
                alert('Erro ao adicionar rota.');
            }
        )
    }
}
