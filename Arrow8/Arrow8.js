/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arrow8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrow1-a", "./Arrow8/costumes/arrow1-a.svg", {
        x: 14.404574999999966,
        y: 23.334218753038385,
      }),
    ];

    this.sounds = [new Sound("pop", "./Arrow8/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *startAsClone() {
    this.goto(
      this.toNumber(this.stage.vars.x4),
      this.toNumber(this.stage.vars.y4)
    );
    this.direction = this.toNumber(this.stage.vars.dir4);
    while (!(this.toNumber(this.stage.vars.rail4) === 1)) {
      yield;
    }
    yield* this.wait(2);
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.toNumber(this.stage.vars.rail4) === 1) {
        this.effects.color += 25;
      }
      yield;
    }
  }
}
