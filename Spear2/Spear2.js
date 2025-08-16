/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spear2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("spear", "./Spear2/costumes/spear.png", { x: 457, y: 70 }),
      new Costume("spear2", "./Spear2/costumes/spear2.svg", {
        x: 186.06132075471743,
        y: 35.91172506738545,
      }),
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *startAsClone() {
    this.costume = "spear2";
    this.goto(this.random(-220, 220), -150);
    this.visible = true;
    yield* this.wait(0.2857);
    this.costume = "spear";
    yield* this.wait(0.2857);
    this.deleteThisClone();
  }
}
