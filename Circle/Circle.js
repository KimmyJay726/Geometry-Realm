/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Circle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ETriangle", "./Circle/costumes/ETriangle.svg", {
        x: 109.48875432525944,
        y: 120.37067474048442,
      }),
      new Costume("ETriangle2", "./Circle/costumes/ETriangle2.png", {
        x: 200,
        y: 195,
      }),
      new Costume("ETriangle3", "./Circle/costumes/ETriangle3.svg", {
        x: 101.35606999999996,
        y: 100.81817999999998,
      }),
    ];

    this.sounds = [
      new Sound("Laser2", "./Circle/sounds/Laser2.wav"),
      new Sound("Laser1", "./Circle/sounds/Laser1.wav"),
      new Sound("Teleport2", "./Circle/sounds/Teleport2.wav"),
      new Sound("Coin", "./Circle/sounds/Coin.wav"),
      new Sound("Glass Breaking", "./Circle/sounds/Glass Breaking.wav"),
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
    this.stage.vars.characterstats = 3;
    this.stage.vars.selectedshape = 1;
  }

  *whenIReceiveShapeselect2() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("Circle");
        this.size = 20;
      }
      while (!!this.touching("mouse")) {
        yield;
      }
      this.broadcast("Cls3");
      this.size = 14;
      yield;
    }
  }
}
