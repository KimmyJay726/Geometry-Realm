/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TrackerV3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Star", "./TrackerV3/costumes/Star.png", { x: 375, y: 360 }),
      new Costume("Sun", "./TrackerV3/costumes/Sun.svg", {
        x: 65.25,
        y: 67.56815354655767,
      }),
      new Costume("Sun2", "./TrackerV3/costumes/Sun2.svg", {
        x: 56.95238095238096,
        y: 54.51851851851853,
      }),
      new Costume("costume1", "./TrackerV3/costumes/costume1.svg", {
        x: 267.3552926644452,
        y: 194.40653523670974,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.sprites["Star"].x, this.sprites["Star"].y);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Ping"].y - this.y,
        this.sprites["Ping"].x - this.x
      )
    );
    while (!this.touching("edge")) {
      this.move(10);
      yield;
    }
    this.visible = false;
  }

  *startAsClone2() {
    yield* this.wait(0.9);
    for (let i = 0; i < 4; i++) {
      this.sprites["SmartBullet"].createClone();
      yield* this.wait(0.1);
      yield;
    }
    this.deleteThisClone();
  }
}
