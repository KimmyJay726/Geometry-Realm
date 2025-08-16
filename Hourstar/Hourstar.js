/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hourstar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pencil-a", "./Hourstar/costumes/pencil-a.svg", {
        x: 103.53352071414918,
        y: 105.71242557376841,
      }),
      new Costume("pencil-a2", "./Hourstar/costumes/pencil-a2.svg", {
        x: 38.318854308523015,
        y: 37.84537575203828,
      }),
    ];

    this.sounds = [new Sound("pop", "./Hourstar/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
    ];
  }

  *startAsClone() {
    this.size = this.random(10, 20);
    this.visible = true;
    this.goto(this.sprites["Hourglass"].x, this.sprites["Hourglass"].y);
    yield* this.glide(2, this.random(-170, 170), this.random(40, 130));
  }

  *startAsClone2() {
    yield* this.wait(5);
    if (1 === this.random(1, 2)) {
      while (true) {
        this.direction += 3;
        yield;
      }
    } else {
      while (true) {
        this.direction -= 3;
        yield;
      }
    }
  }

  *startAsClone3() {
    yield* this.wait(5);
    while (true) {
      yield* this.glide(2, this.random(-170, 170), this.random(40, 130));
      yield;
    }
  }
}
