/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ping extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("apple", "./Ping/costumes/apple.svg", { x: 31, y: 31 }),
    ];

    this.sounds = [new Sound("Chomp", "./Ping/sounds/Chomp.wav")];

    this.triggers = [];
  }

  *whenbackdropswitchesto() {
    yield* this.wait(9.6);
    while (true) {
      while (
        !(
          !(this.toNumber(this.stage.vars.phase) === 4) ||
          this.toNumber(this.stage.vars.phase) === 4.5 ||
          this.toNumber(this.stage.vars.phase) === 5
        )
      ) {
        yield;
      }
      yield* this.wait(1.8);
      this.goto(this.sprites["Etriangle"].x, this.sprites["Etriangle"].y);
      yield;
    }
  }

  *whenbackdropswitchesto2() {}
}
