/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cross3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("PinClipart", "./Cross3/costumes/PinClipart.svg", {
        x: 180.324625,
        y: 122.97699500000002,
      }),
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *startAsClone() {
    this.goto(-220, this.random(-150, 150));
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Etriangle"].y - this.y,
        this.sprites["Etriangle"].x - this.x
      )
    );
    this.visible = true;
    this.direction += this.random(-15, 15);
    while (!this.touching("edge")) {
      this.move(5);
      yield;
    }
    this.deleteThisClone();
  }
}
