/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lightning3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("lightning", "./Lightning3/costumes/lightning.svg", {
        x: 35.8743475,
        y: 40.31357750000001,
      }),
    ];

    this.sounds = [new Sound("pop", "./Lightning3/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *startAsClone() {
    this.goto(this.sprites["Apple3"].x, this.sprites["Apple3"].y);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Whitesquare"].y - this.y,
        this.sprites["Whitesquare"].x - this.x
      )
    );
    this.visible = true;
    yield* this.glide(
      0.6896,
      this.sprites["Whitesquare"].x,
      this.sprites["Whitesquare"].y
    );
    this.deleteThisClone();
  }
}
