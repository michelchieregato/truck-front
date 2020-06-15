import {Component, OnInit} from '@angular/core';
import {Place, PlaceService} from "~/app/services/place.service";
import {Router} from "@angular/router";

@Component({
    selector: 'ns-evaluate',
    templateUrl: './evaluate.component.html',
    styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent implements OnInit {
    place: Place;


    constructor(private router: Router, private placeService: PlaceService) {
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

}
