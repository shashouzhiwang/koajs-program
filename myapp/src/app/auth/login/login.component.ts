import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { HttpService } from "../../provider/http.service";
import { Config } from "../../provider/config";
import { HttpEventType, HttpResponse } from "@angular/common/http";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  history: string ;
  chat: string ;
  ws: any;
  constructor(
    public httpService: HttpService,
    public env: Config,
    public http: Http
  ) { }

  ngOnInit() {
    // console.log("000");
    this.httpService.get(this.env.getEndpoint("products")).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round(100 * event["loaded"] / event["total"]);
          console.log(`File is ${percentDone}% uploaded.`);
        } else if (event instanceof HttpResponse) {
          console.log("File is completely uploaded!", event);
        }
      },
      () => {});

    this.ws = new WebSocket("ws://localhost:3000/ws/chat");

    this.ws.onmessage = function(event) {
      let data = event.data;
      console.log(data);
      let msg = JSON.parse(data);
      // if (msg.type === "list") {
      //   vmUserList.users = msg.data;
      // } else if (msg.type === 'join') {
      //   addToUserList(vmUserList.users, msg.user);
      //   addMessage(vmMessageList.messages, msg);
      // } else if (msg.type === 'left') {
      //   removeFromUserList(vmUserList.users, msg.user);
      //   addMessage(vmMessageList.messages, msg);
      // } else if (msg.type === 'chat') {
      //   addMessage(vmMessageList.messages, msg);
      // }
    };

    this.ws.onclose = function (evt) {
      console.log("[closed] " + evt.code);
      // var input = $('#form-chat').find('input[type=text]');
      // input.attr('placeholder', 'WebSocket disconnected.');
      // input.attr('disabled', 'disabled');
      // $('#form-chat').find('button').attr('disabled', 'disabled');
    };

    this.ws.onerror = function (code, msg) {
      console.log("[ERROR] " + code + ": " + msg);
    };

  //   this.httpService.post(this.env.getEndpoint("products"), {"name": "XBox", "price": 3999}).subscribe(
  //     (event) => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         // This is an upload progress event. Compute and show the % done:
  //         const percentDone = Math.round(100 * event["loaded"] / event["total"]);
  //         console.log(`File is ${percentDone}% uploaded.`);
  //       } else if (event instanceof HttpResponse) {
  //         console.log("File is completely uploaded!", event);
  //       }
  //     },
  //     () => {});
  }


  test(e) {
    e.preventDefault();
    let text = this.chat.trim();
    if (text) {
      this.chat = "";
      this.ws.send(text);
    }
  }

  getWindowHeight () {
    return {
      // height: window.s
    };
  }

}
