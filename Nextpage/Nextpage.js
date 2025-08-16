/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Nextpage extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Star", "./Nextpage/costumes/Star.png", { x: 375, y: 360 }),
      new Costume("Sun", "./Nextpage/costumes/Sun.svg", {
        x: 65.25,
        y: 67.56815354655767,
      }),
      new Costume("Sun2", "./Nextpage/costumes/Sun2.svg", {
        x: 56.95238095238096,
        y: 54.51851851851853,
      }),
      new Costume("costume1", "./Nextpage/costumes/costume1.svg", {
        x: 265.5860455852502,
        y: 197.07514999999995,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "ShapeSelect" },
        this.whenIReceiveShapeselect
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenIReceiveShapeselect() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.stage.vars.page = 1;
    this.direction = 90;
    this.goto(190, -140);
    this.visible = true;
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("mouse")) {
        this.size = 15;
      }
      while (!!this.touching("mouse")) {
        yield;
      }
      this.size = 10;
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.page) === 1) {
      this.stage.vars.page = 2;
      this.broadcast("Page 2");
      this.direction = -90;
      this.goto(-180, -140);
    } else {
      this.stage.vars.page = 1;
      this.broadcast("Page 1");
      this.direction = 90;
      this.goto(190, -140);
    }
  }
}
