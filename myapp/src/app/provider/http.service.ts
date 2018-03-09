import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Config} from './config';
import 'rxjs/add/observable/fromPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpClient} from '@angular/common/http';
import {CookieService} from 'angular2-cookie/core';
import {environment} from '../../environments/environment';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
// import {TipModelComponent} from '../common-component/tip-model/tip-model.component';

// import {LoginComponent} from "../../../modules/access/login/login.component";


@Injectable()
export class HttpService {
  private isMock: boolean;
  // public loadingVc: any;
  // public loadingView: any;
    public view: any ;
    public renderer: any;
  private timeout: number = 70000;
  code: string;
  constructor(private http: Http,
              private HttpClient: HttpClient,
              private _cookieService: CookieService,
              public config: Config,
              public modalService: BsModalService) {
    this.isMock = environment.baseUrl === '';
  }

  private headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxIiwic2NvcGUiOlsieHgiXSwib3JnYW5pemF0aW9uIjoiMUZyaSBEZWMgMDEgMTA6NDM6NTMgQ1NUIDIwMTciLCJleHAiOjE1MTIxMzk0MzMsImF1dGhvcml0aWVzIjpbImFkbWluIl0sImp0aSI6ImE4NjgyZDFhLTYyMjktNGY1My1iMGI3LTg1NGVmNTE4ODljMCIsImNsaWVudF9pZCI6ImFwcCJ9.98kKd0nkrDsbbfK__4vyoNHsvPVyNIOqeBl-e534bhg'
  });

  public post(url, param) {
    // return this.getToken().mergeMap((token) => {
    //   if(token) {
    //     this.headers.set('Authorization', 'bearer '+token);
    //   }
    //   if(param['urlToken'] && token){
    //     url = url + '?access_token='+token;
    //     delete param['urlToken'];
    //   }
      if (!param['noLoading']) {
        this.showLoading();
      }

      // this.headers.append('Authorization', 'Bearer ' + this.getToken());
    // new HttpRequest('POST', 'url', '', {
    //   reportProgress: true,
    // }).headers();
    const req = new HttpRequest('POST', url, param, {
        headers: this.headers,
        reportProgress: true
    });

      return this.HttpClient.request( req );

    //   return (this.isMock ? this.http.get(url, {headers: this.headers})
    //       : this.http.post(url, param, {headers: headers || this.headers})).map((res) => {
    //           if (!param['noLoading']) {
    //               this.hideLoading();
    //           }
    //           return res.json();
    //       })
    //       // .timeoutWith(this.timeout, Observable.throw({error:'timeout'}))
    //       .catch(this.handleTokenInvalid.bind(this, this.post.bind(this, url, param, true)));
    // // });

    // return this.isMock ? this.http.get(url, {headers: this.headers}) : this.http.post(url, param, {headers: headers || this.headers});
  }

  // public put(url, param, headers?: Headers) {
  //     if (!param['noLoading']) {
  //         this.showLoading();
  //     }
  //     // this.headers.append('Authorization', 'Bearer ' + this.getToken());
  //     return (this.isMock ? this.http.get(url)
  //         : this.http.put(url, param, {headers: headers || this.headers}))
  //             .map((res) => {
  //                 if (!param['noLoading']) {
  //                     this.hideLoading();
  //                 }
  //                 return res.json();
  //             })
  //         // .timeoutWith(this.timeout, Observable.throw({error:'timeout'}))
  //         .catch(this.handleTokenInvalid.bind(this, url, param, true));
  //   // });
  //   // return this.isMock ? this.http.get(url) : this.http.put(url, param, {headers: headers || this.headers});
  // }

  // public get(url, params: any = {}) {
  //   // return this.getToken().mergeMap((token) => {
  //   //   if(token) {
  //   //     this.headers.set('Authorization', 'bearer '+token);
  //   //     // this.headers.set('Authorization', 'bearer 43d6fd8b-fbb5-46ca-a5c9-41e17771a1c0');
  //   //   }
  //   //   if(params['urlToken']){
  //   //     url = url + '?access_token='+token;
  //   //     delete params['urlToken'];
  //   //   }
  //     if (!params['noLoading']) {
  //         this.showLoading();
  //     }
  //     // this.headers.append('Authorization', 'Bearer ' + this.getToken());
  //     return (this.isMock ? this.http.get(url, {search: this.serialize(params)})
  //         : this.http.get(url, {headers: this.headers
  //             , search: this.serialize(params)}))/*.catch(this.catchError())*/
  //         // .timeoutWith(this.timeout, Observable.throw({error:'timeout'}))
  //         .map((res) => {
  //             if (!params['noLoading']) {
  //                 this.hideLoading();
  //             }
  //             return res.json();
  //         })
  //         .catch(this.handleTokenInvalid.bind(this, this.get.bind(this, url, params, true)));
  //   // });
  //   // return this.isMock ? this.http.get(url) : this.http.get(url, {headers: this.headers});
  // }

  // public delete(url) {
  //   // return this.getToken().mergeMap((token) => {
  //   //   if(token) {
  //   //     this.headers.set('Authorization', 'bearer '+token);
  //   //   }
  //   //   this.headers.append('Authorization', 'Bearer ' + this.getToken());
  //     return this.isMock ? this.http.get(url)
  //       : this.http.delete(url, {headers: this.headers})
  //         // .timeoutWith(this.timeout, Observable.throw({error:'timeout'}))
  //         /*.catch(this.handleTokenInvalid.bind(this, this.delete(url), true))*/;
  //   // });
  //   // return this.isMock ? this.http.get(url) : this.http.delete(url, {headers: this.headers});
  // }

  public getToken() {
      let tokenObj =  this._cookieService.getObject('tObject');
      return tokenObj && tokenObj['access_token'];
  }

  public setLoading (render, el) {
      this.view = el;
      this.renderer = render;
  }

  public showLoading () {
      if (this.renderer) {
          this.renderer.setElementClass(this.view, 'dn', false);
      }
  }
  public hideLoading() {
      if (this.renderer) {
          this.renderer.setElementClass(this.view, 'dn', true);
      }
  }

  /*public jsonp(url) {


  }*/

  // private getToken() {
  //   return Observable.fromPromise(this.storage.get('access_token'));
  // }

  // private getRefreshToken() {
  //   return Observable.fromPromise(this.storage.get('refresh_token'));
  // }

  /*private catchError() {
    return (res: Response) => {
      if (res.status === 0 || res.status === 401 || res.status === 403) {
        // this.popLogin();
        //handle authorization errors
        //in this example I am navigating to logout route which brings the login screen
        // return Observable.of(res);
        return this.fetchToken();
      }
      return Observable.throw(res);
    };
  }*/

  // public popLogin() {
  //   let loginModal = this.modalCtrl.create(LoginComponent);
  //   loginModal.present();
  //   return loginModal;
  // };

  private handleTokenInvalid(retryMethod: () => Observable<Response>, initialError) {
    /*if(initialError['error'] == 'timeout'){
      this.utilsService.popMessage({
        resultFlag: false,
        message: "  请求超时",
        buttonText: "",
        hideButton: true
      });
      return ;
    }
    // let count = 1;
    if(/!*initialError.status === 0 ||*!/ initialError.status === 401 || initialError.status === 403 ) {
      return this.fetchToken().flatMap(() => {
        // return retryMethod();
      }).catch((err) => {
        // this.storage.remove('access_token');
        // this.storage.remove('refresh_token');
        console.warn('您的token过期了 ，需重新登陆');
        return Observable.of();
      })
    } else {
      throw Observable.throw(initialError);
    }*/
    this.hideLoading();

  }

  // private fetchToken() {
  //   return this.getRefreshToken().mergeMap((token) => {
  //     if(token) {
  //       return this.refreshToken(token);
  //     }else {
  //       return Observable.throw({});
  //     }
  //   });
  // }

  public refreshToken(refreshToken) {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Authorization': 'Basic YXBwOmFwcA=='
    });
    let body = 'grant_type=refresh_token&refresh_token=' + refreshToken;
    return this.http.post(this.config.getEndpoint("login"), body, {headers: headers}).map((value) => {
        value = value.json();
        // this.storage.set('access_token', value['access_token']);
        // this.storage.set('refresh_token', value['refresh_token']);
        return value;
      }/*, (err) => {

        if(err.status === 401 || err.status === 403) {
          this.storage.remove('access_token');
          this.storage.remove('refresh_token');
        }
    }*/)/*.catch(err => {
        if(err.status === 401 || err.status === 403) {
          this.storage.remove('access_token');
          this.storage.remove('refresh_token');
        }
        return Observable.throw(err);
      })*/;
  }

  public serialize(obj) {
    if(!obj){
      return {};
    }
    var str = [];
    for(var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

    getUrlParams(url, paraName) {
        let arrObj = url.split("?");

        if (arrObj.length > 1) {
            let arrPara = arrObj[1].split("&");
            let arr;

            for (let i = 0; i < arrPara.length; i++) {
                arr = arrPara[i].split("=");

                if (arr != null && arr[0] === paraName) {
                    return arr[1];
                }
            }
            return "";
        } else {
            return "";
        }
    }

    /*popConfirm() {
        let bsModalRef: BsModalRef;
        bsModalRef = this.modalService.show(ConfirmPopComponent);
        bsModalRef.content.title = 'Modal with component';
        // return bsModalRef;
    }*/

    showErrorTip(message: string) {
        // let bsModalRef: BsModalRef;
        // bsModalRef = this.modalService.show(TipModelComponent, Object.assign({}, {
        //     animated: true,
        //     keyboard: true,
        //     backdrop: true,
        //     ignoreBackdropClick: false
        // }, {class: 'modal-sm common-message'}));
        // bsModalRef.content.tipText = message;
    }
}
