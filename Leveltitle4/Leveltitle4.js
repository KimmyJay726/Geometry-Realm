/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Leveltitle4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Leveltitle4/costumes/costume1.svg", {
        x: 433.75,
        y: 51.75,
      }),
    ];

    this.sounds = [new Sound("pop", "./Leveltitle4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = true;
    yield* this.wait(2);
    this.visible = false;
  }
}
