/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tracker extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Star", "./Tracker/costumes/Star.png", { x: 375, y: 360 }),
      new Costume("Sun", "./Tracker/costumes/Sun.svg", {
        x: 65.25,
        y: 67.56815354655767,
      }),
      new Costume("Sun2", "./Tracker/costumes/Sun2.svg", {
        x: 56.95238095238096,
        y: 54.51851851851853,
      }),
      new Costume("costume1", "./Tracker/costumes/costume1.svg", {
        x: 267.3552926644452,
        y: 194.40653523670974,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *startAsClone() {
    this.visible = true;
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Etriangle"].y - this.y,
        this.sprites["Etriangle"].x - this.x
      )
    );
    yield* this.glide(1.8, this.random(-150, 150), 120);
    while (
      !(
        this.compare(2.9, this.stage.vars.tracker) < 0 ||
        this.touching(this.sprites["Etriangle"].andClones())
      )
    ) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Etriangle"].y - this.y,
          this.sprites["Etriangle"].x - this.x
        )
      );
      this.stage.vars.tracker += 0.1;
      this.move(Math.E ** this.toNumber(this.stage.vars.tracker));
      yield;
    }
    this.stage.vars.tracker = 0;
    while (!this.touching("edge")) {
      this.move(10);
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.stage.vars.tracker = 0;
  }
}
