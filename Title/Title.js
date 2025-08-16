/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Title extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Title/costumes/costume1.svg", {
        x: 182.3697183098591,
        y: 41.431954225352115,
      }),
    ];

    this.sounds = [new Sound("pop", "./Title/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = true;
    this.size = 100;
  }
}
