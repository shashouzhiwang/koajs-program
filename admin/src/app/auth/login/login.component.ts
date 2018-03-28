import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { HttpService } from "../../provider/http.service";
import { Config } from "../../provider/config";
import { HttpEventType, HttpResponse } from "@angular/common/http";
// import { io } from "socket.io-client";
import * as io from "socket.io-client";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  history: string ;
  chat: string ;
  ws: any;
  socket: any;
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
    this.socket = io.connect("http://localhost:3000");
    this.socket.on("connect", (socket) => {
      // this.socket.emit("hi!");
      console.log(this.socket.id);
      this.socket.on("connect_error", (error) => {
        console.error(error);
      });
      this.socket.on("error", (error) => {
        console.error(error + "---error");
      });
      this.socket.on("disconnect", (error) => {
        console.error("---disconnect");
      });
    });

  }


  test(e) {
    e.preventDefault();
    let text = this.chat.trim();
    if (text) {
      this.chat = "";
      this.socket.emit("test", text);
      // this.ws.send(text);
    }
  }

  getWindowHeight () {
    return {
      // height: window.s
    };
  }

}
