import { Component, OnInit, Input } from '@angular/core';
import {ClientService} from '~/app/services/client.service'

@Component({
  selector: 'ns-list-saved-paths',
  templateUrl: './list-saved-paths.component.html',
  styleUrls: ['./list-saved-paths.component.css'],
  providers: [ClientService],
  moduleId: module.id
})
export class ListSavedPathsComponent implements OnInit {
  destinationsList: any;
  onlyFavorites: boolean;
  @Input() set favorties(value: boolean) {
      this.onlyFavorites = value ? value : null;
  };
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
      this.getDestinationsList();
  }

  getDestinationsList() {
      this.clientService.getDestinationsList(this.onlyFavorites)
          .subscribe((result) => {
              this.destinationsList = result;
          }, (error) => {
              console.log(error);
          });
  }
}
