/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Walldeploy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Walldeploy/costumes/costume1.svg", {
        x: 49.68548030636293,
        y: 21.910021274322958,
      }),
    ];

    this.sounds = [new Sound("pop", "./Walldeploy/sounds/pop.wav")];

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
    this.goto(
      this.toNumber(this.stage.vars.wallDirection),
      this.toNumber(this.stage.vars.wallY)
    );
    this.direction = this.toNumber(this.stage.vars.wallOrientation);
  }

  *whenGreenFlagClicked() {
    this.deleteThisClone();
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
    this.deleteThisClone();
  }
}
