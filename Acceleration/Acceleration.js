/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Acceleration extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Acceleration/costumes/costume1.svg", {
        x: 49.68548030636293,
        y: 21.910021274322958,
      }),
    ];

    this.sounds = [new Sound("pop", "./Acceleration/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *startAsClone() {
    this.stage.vars.tracer = 0;
    this.x = this.toNumber(this.stage.vars.xPosition) + this.random(-40, 40);
    this.visible = true;
    while (!(this.y === -180)) {
      this.move(15);
      this.sprites["Tracer"].createClone();
      yield;
    }
    this.stage.vars.tracer = 1;
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (!(this.y === -180)) {
      this.stage.vars.tracerX = this.x;
      this.stage.vars.tracerY = this.y;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.y = 180;
  }
}
