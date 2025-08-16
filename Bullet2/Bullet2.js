/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bullet2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Icicle Bullet", "./Bullet2/costumes/Icicle Bullet.png", {
        x: 147,
        y: 40,
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
    this.direction = this.direction + this.random(-100, 100);
    while (!this.touching("edge")) {
      this.move(3);
      yield;
    }
    this.deleteThisClone();
  }
}
