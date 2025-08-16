/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Storytext extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "clipart-sword-in-sword-clipart-385493",
        "./Storytext/costumes/clipart-sword-in-sword-clipart-385493.svg",
        { x: 95.39011640548512, y: 766.7214012239443 }
      ),
      new Costume(
        "clipart-sword-in-sword-clipart-2",
        "./Storytext/costumes/clipart-sword-in-sword-clipart-2.svg",
        { x: 95.51914901486674, y: 1016.8021813877076 }
      ),
      new Costume(
        "clipart-sword-in-sword-clipart-3",
        "./Storytext/costumes/clipart-sword-in-sword-clipart-3.svg",
        { x: 95.15045926061208, y: 1230.749617869694 }
      ),
      new Costume(
        "clipart-sword-in-sword-clipart-4",
        "./Storytext/costumes/clipart-sword-in-sword-clipart-4.svg",
        { x: 95.08901339540455, y: 174.6068724098792 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenbackdropswitchesto() {
    this.goto(-140, 160);
    yield* this.wait(3);
    this.visible = true;
    while (!this.touching("edge")) {
      this.move(1.5);
      yield;
    }
    this.visible = false;
    this.costume = "clipart-sword-in-sword-clipart-2";
    this.goto(0, 160);
    yield* this.wait(3);
    this.visible = true;
    while (!this.touching("edge")) {
      this.move(1.5);
      yield;
    }
    this.visible = false;
    this.costume = "clipart-sword-in-sword-clipart-3";
    this.goto(-100, 160);
    yield* this.wait(3);
    this.visible = true;
    while (!this.touching("edge")) {
      this.move(1.5);
      yield;
    }
    this.visible = false;
    this.goto(100, 160);
    yield* this.wait(3);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.costume = "clipart-sword-in-sword-clipart-385493";
  }
}
