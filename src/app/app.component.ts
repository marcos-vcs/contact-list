import { Component } from '@angular/core';
import { OpenModalsService } from './services/open-modals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-list';

  constructor(private modalService: OpenModalsService) { }

  creationModal(){
    this.modalService.openCreationModal();
  }

  aboutModal(){
    this.modalService.openAboutModal();
  }


}
