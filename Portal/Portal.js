/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Portal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Portal", "./Portal/costumes/Portal.svg", {
        x: 168.5,
        y: 168.5,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.visible = false;
    yield* this.wait(1);
    while (!(0 === this.toNumber(this.stage.vars.bossHealth))) {
      yield;
    }
    this.stage.watchers.bossHealth.visible = false;
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.direction += 1;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.effects.color += 3;
      yield;
    }
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }
}
