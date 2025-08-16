/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bouncingbetty2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("spear2", "./Bouncingbetty2/costumes/spear2.svg", {
        x: 94.25,
        y: 91.25,
      }),
      new Costume("spear3", "./Bouncingbetty2/costumes/spear3.svg", {
        x: 119.62161712627312,
        y: 117.81759441860302,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.sprites["Whitesquare"].x, this.sprites["Whitesquare"].y);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Etriangle"].y - this.y,
        this.sprites["Etriangle"].x - this.x
      )
    );
    this.direction += this.random(-90, 90);
    for (let i = 0; i < 200; i++) {
      this.costumeNumber++;
      this.move(2);
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching("edge")) {
        this.direction = this.radToScratch(
          Math.atan2(
            this.sprites["Etriangle"].y - this.y,
            this.sprites["Etriangle"].x - this.x
          )
        );
        this.direction += this.random(-90, 90);
      }
      yield;
    }
  }
}
