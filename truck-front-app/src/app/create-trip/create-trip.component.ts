import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
    currentLocation: string;
    destination: string;
    constructor() { }

    ngOnInit(): void {

    }

    submitTrip() {

    }
}
