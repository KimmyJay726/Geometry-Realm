/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SongTitle1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./SongTitle1/costumes/costume1.svg", {
        x: 545.75,
        y: 61.24999999999997,
      }),
    ];

    this.sounds = [new Sound("pop", "./SongTitle1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Wrath" }, this.whenIReceiveWrath),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveWrath() {
    this.visible = true;
    while (true) {
      if (
        this.compare(
          this.stage.vars.HighScoreWrath,
          this.stage.vars.totalScore
        ) < 0
      ) {
        this.stage.vars.HighScoreWrath = this.stage.vars.totalScore;
        while (!null) {
          yield;
        }
      }
      yield;
    }
  }
}
