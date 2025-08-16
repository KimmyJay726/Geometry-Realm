/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Leveltitle1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Leveltitle1/costumes/costume1.svg", {
        x: 52.75,
        y: 31.01875000000001,
      }),
    ];

    this.sounds = [new Sound("pop", "./Leveltitle1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = true;
    yield* this.wait(3);
    this.visible = false;
  }
}
