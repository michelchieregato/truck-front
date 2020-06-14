import { Component, OnInit } from '@angular/core';
import {ClientService} from '~/app/services/client.service'

@Component({
  selector: 'ns-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
    currentPlace: string;
    destination: string;
    constructor(private clientService: ClientService) { }

    ngOnInit(): void {

    }

    getCurrentLocation() {

    }

    getDestinationLocation() {

    }

    submitDestination() {
        this.clientService.createDestination({
            from_name: this.currentPlace,
            from_location: 'location',
            to_name: this.destination,
            to_location: 'DESTINOO'
        }).subscribe(
            (response) => {
                alert('sucesso');
            },
            (err) => {
                alert('erro');
            }
        )
    }
}
