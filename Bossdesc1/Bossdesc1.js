/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bossdesc1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bossdesc1/costumes/costume1.svg", {
        x: 35.25,
        y: 31.01875000000001,
      }),
      new Costume("costume2", "./Bossdesc1/costumes/costume2.svg", {
        x: 35.625,
        y: 31.14375000000001,
      }),
    ];

    this.sounds = [new Sound("pop", "./Bossdesc1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ShapeSelect" },
        this.whenIReceiveShapeselect
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Page 2" },
        this.whenIReceivePage2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Page 1" },
        this.whenIReceivePage1
      ),
    ];
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

  *whenIReceivePage2() {
    this.costume = "costume2";
  }

  *whenIReceivePage1() {
    this.costume = "costume1";
  }
}
