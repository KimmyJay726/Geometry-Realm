/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SmartBullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Icicle Bullet", "./SmartBullet/costumes/Icicle Bullet.svg", {
        x: 73.5,
        y: 20,
      }),
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *startAsClone() {
    this.goto(this.sprites["Star"].x, this.sprites["Star"].y);
    this.visible = true;
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Ping"].y - this.y,
        this.sprites["Ping"].x - this.x
      )
    );
    while (!this.touching("edge")) {
      this.move(10);
      yield;
    }
    this.deleteThisClone();
  }
}
