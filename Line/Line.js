/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Line extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("line", "./Line/costumes/line.svg", { x: 240, y: 6.5 }),
    ];

    this.sounds = [new Sound("pop", "./Line/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {}

  *whenbackdropswitchesto() {}

  *startAsClone2() {}

  *whenbackdropswitchesto2() {}

  *whenGreenFlagClicked2() {}
}
