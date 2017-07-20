import { Component } from '@angular/core';
import { AuthServiceService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthServiceService) { }
  title = 'app';

SearchQuery:string="";
 ongroupClicked(message: string): void {
      console.log("app component", message);
      this.SearchQuery=message;
    }

}



