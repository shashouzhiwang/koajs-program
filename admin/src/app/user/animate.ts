import { Component, OnInit, trigger, state, style, animate, transition, keyframes } from "@angular/core";
export const SingalAnimate = trigger("signal", [
  state("void", style({
    "transform": "translateX(-100%)"
  })),
  state("go", style({
    "background-color": "green",
    "height": "100px"
  })),
  state("stop", style({
    "background-color": "red",
    "height": "50px"
  })),
  transition("void => *", animate(5000, keyframes([
    style({"transform": "scale(0)"}),
    style({"transform": "scale(0.1)"}),
    style({"transform": "scale(0.3)"}),
    style({"transform": "scale(0.6)"}),
    style({"transform": "scale(0.8)"}),
    style({"transform": "scale(1)"})
  ]))),
  transition("* => *", animate(".5s 1s cubic-bezier(0.2, 0.8, 0.3, 1.8)"))
]);
