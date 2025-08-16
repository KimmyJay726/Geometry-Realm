/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spear4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("spear", "./Spear4/costumes/spear.png", { x: 457, y: 70 }),
      new Costume("spear2", "./Spear4/costumes/spear2.svg", {
        x: 186.06132075471743,
        y: 35.91172506738545,
      }),
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];

    this.vars.spearfall = 0;
  }

  *startAsClone() {
    this.goto(0, 125);
    this.direction = 180;
    this.visible = true;
    yield* this.glide(0.2857, this.random(-200, 200), 155);
    this.vars.spearfall = 0.5;
    while (!this.touching("edge")) {
      this.move(this.toNumber(this.vars.spearfall));
      this.vars.spearfall = this.toNumber(this.vars.spearfall) + 0.2;
      yield;
    }
    this.deleteThisClone();
  }
}
