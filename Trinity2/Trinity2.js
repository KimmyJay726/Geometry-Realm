/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Trinity2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "output-onlinepngtools (5)",
        "./Trinity2/costumes/output-onlinepngtools (5).svg",
        { x: 119.02457002457001, y: 137.4189189189189 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Page 1" },
        this.whenIReceivePage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ShapeSelect" },
        this.whenIReceiveShapeselect
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Page 2" },
        this.whenIReceivePage2
      ),
    ];
  }

  *whenIReceivePage1() {
    this.visible = true;
  }

  *whenIReceiveShapeselect() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("ShapeSelect");
    while (!(this.toNumber(this.stage.vars.selectedshape) === 1)) {
      yield;
    }
    this.stage.costume = "Pride Background";
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        this.size = 25;
      }
      while (!!this.touching("mouse")) {
        yield;
      }
      this.size = 20;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.direction = -15;
    while (true) {
      this.direction += 1;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.visible = true;
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    this.visible = false;
  }

  *whenIReceivePage2() {
    this.visible = false;
  }
}
