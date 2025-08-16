/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arrow3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrow1-a", "./Arrow3/costumes/arrow1-a.svg", {
        x: 14.404574999999966,
        y: 23.334218753038385,
      }),
    ];

    this.sounds = [new Sound("pop", "./Arrow3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *startAsClone() {
    this.goto(this.sprites["Apple2"].x, this.sprites["Apple2"].y);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Etriangle"].y - this.y,
        this.sprites["Etriangle"].x - this.x
      )
    );
    this.stage.vars.dir2 = this.direction;
    while (!this.touching("edge")) {
      this.move(20);
      this.stage.vars.x2 = this.x;
      this.stage.vars.y2 = this.y;
      this.sprites["Arrow4"].createClone();
      yield* this.wait(0.3448);
      yield;
    }
    this.stage.vars.rail2 = 1;
    for (let i = 0; i < 10; i++) {
      yield* this.wait(0.2);
      this.sprites["Pencil5"].createClone();
      yield;
    }
    this.stage.vars.rail2 = 0;
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("edge")) {
        this.effects.color += 25;
      }
      yield;
    }
  }
}
