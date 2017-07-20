import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//required for return type for http requests
import { Observable } from 'rxjs/Observable';

//Loads the library but does not import any modules
import 'rxjs/add/operator/map';

import { IGroups } from './Groups';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class GroupsService {

    private _GroupUrl = 'assets/Groups.json';

  //Inject the http service
  constructor(private _http: Http) {

  }
  
  getAllGroups(): Observable<IGroups[]> {
    return this._http.get(this._GroupUrl)
      //Map the response to IPublication array 
      .map((response: Response) => <IGroups[]>response.json())
      .do(
        data => console.log('All : ' + JSON.stringify(data))
        
        )
      // .catch(this.handleError);

  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
