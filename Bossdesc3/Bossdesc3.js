/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bossdesc3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bossdesc3/costumes/costume1.svg", {
        x: 36.5,
        y: 31.14375000000001,
      }),
      new Costume("costume2", "./Bossdesc3/costumes/costume2.svg", {
        x: 36.5,
        y: 31.14375000000001,
      }),
    ];

    this.sounds = [new Sound("pop", "./Bossdesc3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Page 1" },
        this.whenIReceivePage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Page 2" },
        this.whenIReceivePage2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ShapeSelect" },
        this.whenIReceiveShapeselect
      ),
    ];
  }

  *whenIReceivePage1() {
    this.costume = "costume1";
  }

  *whenIReceivePage2() {
    this.costume = "costume2";
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.visible = true;
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveShapeselect() {
    this.visible = false;
  }
}
