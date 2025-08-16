/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pencil9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pencil-a", "./Pencil9/costumes/pencil-a.svg", {
        x: 69.20345966907851,
        y: 10.434179999999998,
      }),
    ];

    this.sounds = [new Sound("pop", "./Pencil9/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.sprites["Whitesquare"].x, this.sprites["Whitesquare"].y);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Etriangle"].y - this.y,
        this.sprites["Etriangle"].x - this.x
      )
    );
    this.direction -= 30;
    while (!this.touching("edge")) {
      this.move(5);
      yield;
    }
    this.deleteThisClone();
  }
}
