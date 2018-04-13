import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Config } from "../service/config"
import { HttpService } from "../service/http.service"

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class MemberSer {
  public postListURL = "mock-data/goods-list.json";
  constructor(
    public http: Http,
    public env: Config,
    public httpService: HttpService
  ) { }

  getGoodsList({
                 searchText,
                 page: number = 1,
                 type: string= "get"
               }) {
    return Observable.of({});
  }

  findOrganizationTree() {
    return this.httpService.get(this.env.getEndpoint('products'), {});
  }

  register(data) {
    return this.httpService.post(this.env.getEndpoint('register'), data);
  }
}
