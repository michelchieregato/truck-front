import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
