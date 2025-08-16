/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spear extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("spear", "./Spear/costumes/spear.png", { x: 456, y: 68 }),
      new Costume("spear2", "./Spear/costumes/spear2.svg", {
        x: 85.25000000000003,
        y: 34.25,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.sprites["Trinity"].x, this.sprites["Trinity"].y);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Etriangle"].y - this.y,
        this.sprites["Etriangle"].x - this.x
      )
    );
    this.direction += this.random(-90, 90);
    for (let i = 0; i < 200; i++) {
      this.move(7);
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      this.ifOnEdgeBounce();
      yield;
    }
  }
}
