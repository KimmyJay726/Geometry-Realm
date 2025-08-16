/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Whitesquare2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("WhiteSquare", "./Whitesquare2/costumes/WhiteSquare.svg", {
        x: 179,
        y: 180,
      }),
    ];

    this.sounds = [new Sound("Pop", "./Whitesquare2/sounds/Pop.wav")];

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
      new Trigger(
        Trigger.BROADCAST,
        { name: "ShapeSelect" },
        this.whenIReceiveShapeselect
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
    ];
  }

  *whenIReceivePage1() {
    this.visible = true;
  }

  *whenIReceivePage2() {
    this.visible = false;
  }

  *whenIReceiveShapeselect() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("ShapeSelect");
    while (!(this.toNumber(this.stage.vars.selectedshape) === 1)) {
      yield;
    }
    this.stage.costume = "Greed Background";
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        this.size = 17;
      }
      while (!!this.touching("mouse")) {
        yield;
      }
      this.size = 12;
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

  *whenGreenFlagClicked3() {}

  *whenGreenFlagClicked4() {}

  *whenGreenFlagClicked5() {}

  *whenGreenFlagClicked6() {}

  *whenGreenFlagClicked7() {
    this.visible = true;
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    this.visible = false;
  }
}
