/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pencil10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pencil-a", "./Pencil10/costumes/pencil-a.svg", {
        x: 28.891181660899605,
        y: 27.831838333333337,
      }),
      new Costume("pencil-a2", "./Pencil10/costumes/pencil-a2.svg", {
        x: 38.318854308523015,
        y: 37.84537575203828,
      }),
    ];

    this.sounds = [new Sound("pop", "./Pencil10/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.sprites["Whitesquare"].x, this.sprites["Whitesquare"].y);
    yield* this.glide(1.3793, this.random(-240, 240), this.random(-180, 180));
    for (let i = 0; i < this.random(1, 15); i++) {
      this.size += 2;
      yield;
    }
    if (1 === this.random(1, 2)) {
      for (let i = 0; i < 80; i++) {
        this.direction += 15;
        yield;
      }
    } else {
      for (let i = 0; i < 80; i++) {
        this.direction -= 15;
        yield;
      }
    }
    this.deleteThisClone();
  }
}
