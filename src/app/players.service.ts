import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { IPlayer } from './player';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PlayerService {

  private _playerUrl = 'http://127.0.0.1/data.json';
  // private _playerUrl = 'http://localhost:4200/data.json';

  constructor(private _http: Http) { }

  getPlayers(): Observable<IPlayer[]> {
    //console.log('Getting players now...');
    return this._http.get(this._playerUrl)
      .map((response: Response) => <IPlayer[]>response.json())
      .do(data => console.log('All records:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // console.error(error);
    return Observable.throw(error.json().error || ' Server Error');
  }

}
