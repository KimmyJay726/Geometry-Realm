/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Star2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Star", "./Star2/costumes/Star.png", { x: 375, y: 360 }),
      new Costume("Sun", "./Star2/costumes/Sun.svg", {
        x: 65.25,
        y: 67.56815354655767,
      }),
      new Costume("Sun2", "./Star2/costumes/Sun2.svg", {
        x: 56.95238095238096,
        y: 54.51851851851853,
      }),
      new Costume("costume1", "./Star2/costumes/costume1.svg", {
        x: 267.3552926644452,
        y: 194.40653523670974,
      }),
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *startAsClone() {
    this.visible = true;
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Etriangle"].y - this.y,
        this.sprites["Etriangle"].x - this.x
      )
    );
    while (!this.touching("edge")) {
      this.move(10);
      yield;
    }
    this.deleteThisClone();
  }
}
