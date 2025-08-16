/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TrackerV2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Star", "./TrackerV2/costumes/Star.png", { x: 375, y: 360 }),
      new Costume("Sun", "./TrackerV2/costumes/Sun.svg", {
        x: 65.25,
        y: 67.56815354655767,
      }),
      new Costume("Sun2", "./TrackerV2/costumes/Sun2.svg", {
        x: 56.95238095238096,
        y: 54.51851851851853,
      }),
      new Costume("costume1", "./TrackerV2/costumes/costume1.svg", {
        x: 267.3552926644452,
        y: 194.40653523670974,
      }),
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *startAsClone() {
    this.visible = true;
    this.direction = 180;
    yield* this.glide(1.8, this.random(-150, 150), 120);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Etriangle"].y - this.y,
        this.sprites["Etriangle"].x - this.x
      )
    );
    while (!this.touching("edge")) {
      this.move(15);
      yield;
    }
    this.deleteThisClone();
  }
}
