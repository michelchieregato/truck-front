import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    moduleId: module.id
})

export class HomeComponent {
    constructor(private router: Router) {}
    userName = 'Zé';
    points = 524;
    placesList = [
        {
           name: "Posto BR 24h",
           distance: "250m",
           services: "Abastecimento, Banheiro, Chuveiro, alimentação",
           rating: 4
        },
        {
           name: "Posto de saúde UBS",
           distance: "250m",
           services: "Abastecimento, Banheiro, Chuveiro, alimentação",
           rating: 4
        },
        {
           name: "Posto da Policia Federal",
           distance: "1,5km",
           services: "Abastecimento, Banheiro, Chuveiro, alimentação",
           rating: 2
        }
    ];

    navigateToLogin() {
       this.router.navigateByUrl('/login');
    }
}
