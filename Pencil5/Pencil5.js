/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pencil5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pencil-a", "./Pencil5/costumes/pencil-a.svg", {
        x: 32.36984492790066,
        y: 5.676747931106263,
      }),
    ];

    this.sounds = [new Sound("pop", "./Pencil5/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.sprites["Apple2"].x, this.sprites["Apple2"].y);
    this.direction = this.toNumber(this.stage.vars.dir2);
    while (!this.touching("edge")) {
      this.move(7);
      yield;
    }
    this.deleteThisClone();
  }
}
