/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wallspike4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Wallspike4/costumes/costume1.svg", {
        x: 49.68548030636293,
        y: 21.910021274322958,
      }),
    ];

    this.sounds = [new Sound("pop", "./Wallspike4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone() {
    this.visible = true;
    this.stage.vars.wallOrientation = this.direction;
    while (!(this.y === -170)) {
      this.stage.vars.wallDirection = this.x;
      this.stage.vars.wallY = this.y;
      this.sprites["Walldeploy"].createClone();
      this.y -= 10;
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
    this.deleteThisClone();
  }
}
