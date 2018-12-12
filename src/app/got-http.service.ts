import { Injectable } from "@angular/core";
import { HttpModule } from "@angular/http";

import {
  HttpClient,
  HttpErrorResponse,
  HttpClientModule
} from "@angular/common/http";

import { observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class GotHttpService {
  public url = "https://anapioficeandfire.com/api/";

  public x;
  public response;
  public res;

  constructor(public _http: HttpClient) {}

  public getBook() {
    let response = this._http.get(this.url + "books" + "?pagesize=2000000");
    console.log(response);
    return response;
  }

  public getHouse() {
    let res = this._http.get(this.url + "houses" + "?pagesize=2000000");
    console.log(res);
    return res;
  }
  public getCharacter() {
    let res = this._http.get(this.url + "characters" + "?pagesize=2000000");
    console.log(res);
    return res;
  }
}
