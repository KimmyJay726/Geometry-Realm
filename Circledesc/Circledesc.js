/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Circledesc extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Circledesc/costumes/costume1.svg", {
        x: 209.06437499999998,
        y: 77.83973437500003,
      }),
    ];

    this.sounds = [new Sound("pop", "./Circledesc/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Circle" },
        this.whenIReceiveCircle
      ),
      new Trigger(Trigger.BROADCAST, { name: "Cls3" }, this.whenIReceiveCls3),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveCircle() {
    if (this.stage.costume.name === "Menu") {
      this.visible = true;
    }
  }

  *whenIReceiveCls3() {
    this.visible = false;
  }
}
