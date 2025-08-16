/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Triangledesc extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Triangledesc/costumes/costume1.svg", {
        x: 189.10000000000002,
        y: 65.83125000000001,
      }),
    ];

    this.sounds = [new Sound("pop", "./Triangledesc/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Triangle" },
        this.whenIReceiveTriangle
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Cls" }, this.whenIReceiveCls),
    ];
  }

  *whenIReceiveTriangle() {
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

  *whenIReceiveCls() {
    this.visible = false;
  }
}
