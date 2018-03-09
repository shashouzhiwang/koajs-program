import { Component, OnInit, trigger, state, style, animate, transition, keyframes } from "@angular/core";
import { SingalAnimate } from "./animate";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
  animations: [SingalAnimate]
})
export class UserComponent implements OnInit {
  signal: string;
  constructor() { }

  ngOnInit() {
  }

  go() {
    this.signal = "go";
  }

  stop() {
    this.signal = "stop";
  }
}
