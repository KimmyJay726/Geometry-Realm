/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Squaredesc extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Squaredesc/costumes/costume1.svg", {
        x: 214.18947888173238,
        y: 62.196524462670524,
      }),
    ];

    this.sounds = [new Sound("pop", "./Squaredesc/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Square" },
        this.whenIReceiveSquare
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Cls2" }, this.whenIReceiveCls2),
    ];
  }

  *whenIReceiveSquare() {
    if (this.stage.costume.name === "Menu") {
      this.visible = true;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveCls2() {
    this.visible = false;
  }
}
