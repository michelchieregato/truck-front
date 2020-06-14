import { Component, OnInit } from '@angular/core';
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
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
      this.getDestinationsList();
  }

  getDestinationsList() {
      this.clientService.getDestinationsList()
          .subscribe((result) => {
              this.destinationsList = result;
          }, (error) => {
              console.log(error);
          });
  }
}
