/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Square extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ETriangle", "./Square/costumes/ETriangle.svg", {
        x: 109.48875432525944,
        y: 120.37067474048442,
      }),
      new Costume("ETriangle2", "./Square/costumes/ETriangle2.svg", {
        x: 100,
        y: 97.5,
      }),
      new Costume("ETriangle3", "./Square/costumes/ETriangle3.svg", {
        x: 101.35607000000002,
        y: 100.81818490861616,
      }),
    ];

    this.sounds = [
      new Sound("Laser2", "./Square/sounds/Laser2.wav"),
      new Sound("Laser1", "./Square/sounds/Laser1.wav"),
      new Sound("Teleport2", "./Square/sounds/Teleport2.wav"),
      new Sound("Coin", "./Square/sounds/Coin.wav"),
      new Sound("Glass Breaking", "./Square/sounds/Glass Breaking.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "ShapeSelect" },
        this.whenIReceiveShapeselect
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ShapeSelect" },
        this.whenIReceiveShapeselect2
      ),
    ];
  }

  *whenIReceiveShapeselect() {
    this.visible = true;
    while (true) {
      this.effects.color += 5;
      this.direction += 1;
      yield;
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

  *whenthisspriteclicked() {
    this.stage.vars.characterstats = 2;
    this.stage.vars.selectedshape = 1;
  }

  *whenIReceiveShapeselect2() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("Square");
        this.size = 20;
      }
      while (!!this.touching("mouse")) {
        yield;
      }
      this.broadcast("Cls2");
      this.size = 14;
      yield;
    }
  }
}
