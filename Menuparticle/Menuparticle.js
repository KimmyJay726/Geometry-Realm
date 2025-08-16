/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Menuparticle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Star", "./Menuparticle/costumes/Star.png", {
        x: 375,
        y: 360,
      }),
      new Costume("Sun", "./Menuparticle/costumes/Sun.svg", {
        x: 65.25,
        y: 67.56815354655767,
      }),
      new Costume("Sun2", "./Menuparticle/costumes/Sun2.svg", {
        x: 56.95238095238096,
        y: 54.51851851851853,
      }),
      new Costume("costume1", "./Menuparticle/costumes/costume1.svg", {
        x: 267.3552926644452,
        y: 194.40653523670974,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    this.stage.vars.menuparticle = this.random(1, 2);
    if (this.toNumber(this.stage.vars.menuparticle) === 1) {
      this.goto(-225, 170);
    } else {
      this.goto(225, 170);
    }
    while (!this.touching("edge")) {
      this.move(10);
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      this.createClone();
      yield* this.wait(0.2113);
      yield;
    }
  }
}
