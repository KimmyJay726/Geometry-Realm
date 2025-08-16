/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tracer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Tracer/costumes/costume1.svg", {
        x: 49.68548030636293,
        y: 21.910021274322958,
      }),
    ];

    this.sounds = [new Sound("pop", "./Tracer/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *startAsClone() {
    this.goto(
      this.toNumber(this.stage.vars.tracerX),
      this.toNumber(this.stage.vars.tracerY)
    );
    this.visible = true;
    while (!(this.toNumber(this.stage.vars.tracer) === 1)) {
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
  }
}
