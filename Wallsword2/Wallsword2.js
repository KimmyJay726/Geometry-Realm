/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wallsword2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "clipart-sword-in-sword-clipart-385493",
        "./Wallsword2/costumes/clipart-sword-in-sword-clipart-385493.svg",
        { x: 112.66381283617058, y: 112.66381283617058 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
    this.deleteThisClone();
  }

  *whenbackdropswitchesto2() {
    yield* this.wait(3);
    for (let i = 0; i < 2; i++) {
      this.move(5);
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 1)) {
      this.direction -= 15;
      yield;
    }
  }

  *whenbackdropswitchesto3() {
    this.goto(230, -170);
    this.direction = -45;
    yield* this.wait(3);
    this.visible = true;
    for (let i = 0; i < 2; i++) {
      this.move(5);
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 1)) {
      yield* this.glide(2.5, this.random(-240, 240), this.random(-180, 180));
      yield;
    }
    yield* this.glide(0.2857, 230, -170);
    this.direction = -45;
    while (!(this.toNumber(this.stage.vars.phase) === 11)) {
      yield;
    }
    yield* this.glide(8, this.sprites["Trinity"].x, this.sprites["Trinity"].y);
    this.move(10);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
