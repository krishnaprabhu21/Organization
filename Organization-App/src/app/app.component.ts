import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

SearchQuery:string="";
 ongroupClicked(message: string): void {
      console.log("app component", message);
      this.SearchQuery=message;
    }

}



