import {Component, OnInit} from '@angular/core';
import {Place, PlaceService} from "~/app/services/place.service";
import {Router} from "@angular/router";
import {ClientService} from '~/app/services/client.service'

@Component({
    selector: 'ns-evaluate',
    templateUrl: './evaluate.component.html',
    styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent implements OnInit {
    place: Place;
    messages;

    constructor(private router: Router, private placeService: PlaceService, private clientService: ClientService) {
    }

    ngOnInit(): void {
        this.place = this.placeService.currentPlaceSubject.getValue();
        this.detailPlace();
    }

    detailPlace() {
        this.place.addDetails('Rodovia Raposo Tavares, Km 32, Cotia, São Paulo', '24h',
            [{user: 'zecaminhoneiro', message: 'O atendimento é muito bom, precisei usar o telefone e foi rápido pra conseguir.'}])
    }

    navigateToFavorites() {
        this.router.navigateByUrl('/favorites')
    }

    getMessages() {
        this.clientService.getMessages(this.place.name)
            .subscribe((result) => {
                this.messages = result;
            }, (error) => {
                console.log(error);
            });
    }

}
