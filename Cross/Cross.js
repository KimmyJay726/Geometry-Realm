/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cross extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("PinClipart", "./Cross/costumes/PinClipart.svg", {
        x: 180.32368714944369,
        y: 122.97611955381963,
      }),
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *whenbackdropswitchesto() {
    yield* this.wait(3);
    while (!!(this.toNumber(this.stage.vars.phase) === 1)) {
      this.createClone();
      yield* this.wait(0.6);
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 10)) {
      this.createClone();
      yield* this.wait(0.2857);
      yield;
    }
  }

  *startAsClone() {
    this.goto(225, 160);
    this.direction = 180;
    this.visible = true;
    if (this.toNumber(this.stage.vars.phase) === 1) {
      while (!this.touching("edge")) {
        if (!(this.toNumber(this.stage.vars.phase) === 1)) {
          this.direction = this.radToScratch(
            Math.atan2(
              this.sprites["Etriangle"].y - this.y,
              this.sprites["Etriangle"].x - this.x
            )
          );
          this.move(10);
          while (!this.touching("edge")) {
            this.move(10);
            yield;
          }
          this.deleteThisClone();
        } else {
          this.move(2);
        }
        yield;
      }
      this.deleteThisClone();
    } else {
      while (!this.touching("edge")) {
        this.move(10);
        yield;
      }
      this.deleteThisClone();
    }
  }
}
