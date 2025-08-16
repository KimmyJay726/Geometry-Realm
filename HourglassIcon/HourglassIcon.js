/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HourglassIcon extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Star", "./HourglassIcon/costumes/Star.svg", {
        x: 52.93153809815064,
        y: 70.81584793591249,
      }),
      new Costume("Star3", "./HourglassIcon/costumes/Star3.svg", {
        x: 53.87891569253847,
        y: 71.43755303285121,
      }),
      new Costume("Star2", "./HourglassIcon/costumes/Star2.png", {
        x: 311,
        y: 281,
      }),
    ];

    this.sounds = [
      new Sound("Laser1", "./HourglassIcon/sounds/Laser1.wav"),
      new Sound("Oops", "./HourglassIcon/sounds/Oops.wav"),
      new Sound("Pop", "./HourglassIcon/sounds/Pop.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Page 2" },
        this.whenIReceivePage2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ShapeSelect" },
        this.whenIReceiveShapeselect
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Page 1" },
        this.whenIReceivePage1
      ),
    ];
  }

  *whenIReceivePage2() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.direction = 90;
    while (true) {
      this.direction += 1;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching("mouse")) {
        this.size = 40;
      }
      while (!!this.touching("mouse")) {
        yield;
      }
      this.size = 30;
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("ShapeSelect");
    while (!(this.toNumber(this.stage.vars.selectedshape) === 1)) {
      yield;
    }
    this.stage.costume = "Sloth Background";
  }

  *whenIReceiveShapeselect() {
    this.visible = false;
  }

  *whenIReceivePage1() {
    this.visible = false;
  }
}
