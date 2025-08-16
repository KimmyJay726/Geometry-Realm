/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Apple2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("apple", "./Apple2/costumes/apple.svg", { x: 31, y: 31 }),
      new Costume("apple2", "./Apple2/costumes/apple2.svg", {
        x: 10.5,
        y: 10.5,
      }),
    ];

    this.sounds = [new Sound("Chomp", "./Apple2/sounds/Chomp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      this.direction = this.toNumber(this.stage.vars.dir2);
      yield;
    }
  }

  *whenbackdropswitchesto2() {
    this.size = 24;
    this.visible = false;
    yield* this.wait(3);
    this.visible = true;
    for (let i = 0; i < 7; i++) {
      this.size += 11;
      yield;
    }
  }
}
