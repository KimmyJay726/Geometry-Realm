/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SakuraProjectile3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Sun2", "./SakuraProjectile3/costumes/Sun2.svg", {
        x: 12.247088340211349,
        y: 0.25,
      }),
      new Costume("Sun3", "./SakuraProjectile3/costumes/Sun3.svg", {
        x: 12.247088340211349,
        y: 0.25,
      }),
    ];

    this.sounds = [
      new Sound("Laser2", "./SakuraProjectile3/sounds/Laser2.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
    ];
  }

  *startAsClone() {
    this.visible = true;
    if (this.random(1, 2) === 1) {
      this.goto(this.random(-200, 200), 170);
    } else {
      if (this.random(1, 2) === 1) {
        this.goto(this.random(-200, 200), -170);
      } else {
        if (this.random(1, 2) === 1) {
          this.goto(230, this.random(-170, 170));
        } else {
          this.goto(-230, this.random(-170, 170));
        }
      }
    }
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Hourglass"].y - this.y,
        this.sprites["Hourglass"].x - this.x
      )
    );
    while (!this.touching(this.sprites["Hourglass"].andClones())) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Hourglass"].y - this.y,
          this.sprites["Hourglass"].x - this.x
        )
      );
      this.move(10);
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {}

  *startAsClone3() {
    while (true) {
      this.effects.color += 5;
      yield;
    }
  }

  *startAsClone4() {
    yield* this.wait(0.75);
    this.deleteThisClone();
  }
}
