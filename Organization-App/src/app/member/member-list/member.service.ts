import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

//required for return type for http requests
import { Observable } from 'rxjs/Observable';

//Loads the library but does not import any modules
import 'rxjs/add/operator/map';

import { IMembers } from './members';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class MemberService {

  private _MemberUrl = 'assets/members.json';

  //Inject the http service
  constructor(private _http: Http) {

  }


  getAll(): Observable<IMembers[]> {
    return this._http.get(this._MemberUrl)
      //Map the response to IPublication array 
      .map((response: Response) => <IMembers[]>response.json())
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
