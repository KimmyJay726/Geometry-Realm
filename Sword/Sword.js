/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sword extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "clipart-sword-in-sword-clipart-385493",
        "./Sword/costumes/clipart-sword-in-sword-clipart-385493.svg",
        { x: 112.66381283617058, y: 112.66381283617058 }
      ),
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *startAsClone() {
    this.goto(0, 125);
    this.direction = 180;
    this.visible = true;
    yield* this.glide(0.2857, this.random(-200, 200), 162);
    while (!this.touching("edge")) {
      this.move(10);
      yield;
    }
    this.deleteThisClone();
  }
}
