/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ReturnBullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Icicle Bullet",
        "./ReturnBullet/costumes/Icicle Bullet.png",
        { x: 147, y: 40 }
      ),
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.random(-180, 180), -180);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Star"].y - this.y,
        this.sprites["Star"].x - this.x
      )
    );
    while (!this.touching(this.sprites["Star"].andClones())) {
      this.move(2);
      yield;
    }
    this.deleteThisClone();
  }
}
