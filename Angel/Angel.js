/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Angel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Angel", "./Angel/costumes/Angel.svg", {
        x: 103.06781052447155,
        y: 90.9372976084233,
      }),
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];

    this.vars.angelspeed = 0;
  }

  *startAsClone() {
    this.goto(0, 125);
    this.direction = 180;
    this.visible = true;
    yield* this.glide(0.2857, this.random(-200, 200), 162);
    if (this.random(1, 2) === 2) {
      while (!this.touching("edge")) {
        this.move(2);
        yield;
      }
    } else {
      this.vars.angelspeed = 1;
      while (!this.touching("edge")) {
        this.vars.angelspeed = this.toNumber(this.vars.angelspeed) + 0.1;
        this.move(this.toNumber(this.vars.angelspeed));
        yield;
      }
    }
    this.deleteThisClone();
  }
}
