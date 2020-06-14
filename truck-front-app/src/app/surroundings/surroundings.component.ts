import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ns-surroundings',
    templateUrl: './surroundings.component.html',
    styleUrls: ['./surroundings.component.css']
})
export class SurroundingsComponent implements OnInit {
    type: string = 'health';
    locations: any;
    locationsMock = [
        {
            types: ['health'],
            distance: 200,
            name: 'Einstein',
            rate: 5,
            servicesNames: ['Saúde']
        },
        {
            types: ['health'],
            distance: 200,
            name: 'Posto de saude',
            rate: 4,
            servicesNames: ['Saúde']
        },
        {
            types: ['health'],
            distance: 400,
            name: 'Sírio',
            rate: 5,
            servicesNames: ['Saúde']
        },
        {
            types: ['hygine'],
            distance: 100,
            name: 'Banho bom',
            rate: 3,
            servicesNames: ['Chuveiro']
        },
        {
            types: ['hygine'],
            distance: 1000,
            name: 'Banho longe',
            rate: 5,
            servicesNames: ['Chuveiro']
        },
        {
            types: ['hygine', 'food', 'descanso'],
            distance: 10,
            name: 'Parada CCR',
            rate: 2,
            servicesNames: ['Alimentação', 'Chuveiro', 'Abastecimento', 'Alojamento']
        },
        {
            types: ['food'],
            distance: 10,
            name: 'PFzao',
            rate: 2,
            servicesNames: ['Alimentação']
        },
        {
            types: ['food'],
            distance: 10,
            name: 'Fazano',
            rate: 5,
            servicesNames: ['Alimentação']
        },
        {
            types: ['rest'],
            distance: 10,
            name: 'Ovelhinhas',
            rate: 5,
            servicesNames: ['Descanso']
        },
        {
            types: ['safety'],
            distance: 10,
            name: 'Posto da Polícia Federal',
            rate: 5,
            servicesNames: ['Segurança']
        }
    ]
    locationsAtive = [];


    constructor() {
    }

    ngOnInit(): void {
        this.getLocationsFromDb();
    }

    getNearLocationsOfType(type: string) {
        this.type = type;
        this.getLocationsFromDb();
    }

    private getLocationsFromDb() {
        // isso vai chamar um servico
        console.log('oi');
        this.locationsAtive = this.locationsMock.filter((location) => {
            console.log(location.types, this.type);
            return this.type in location.types
        });
        console.log(this.locationsAtive.map((location) => location.name));
        // this.locationsAtive = this.locationsAtive.sort((a, b) => {
        //
        // })
    }


}
