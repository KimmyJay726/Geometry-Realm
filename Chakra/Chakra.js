/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Chakra extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("chakra", "./Chakra/costumes/chakra.svg", {
        x: 154.46854687672135,
        y: 154.46854687672118,
      }),
      new Costume("chakra4", "./Chakra/costumes/chakra4.png", {
        x: 309,
        y: 309,
      }),
      new Costume("chakra2", "./Chakra/costumes/chakra2.svg", {
        x: 128,
        y: 128,
      }),
      new Costume("chakra3", "./Chakra/costumes/chakra3.svg", {
        x: 116.39216565825707,
        y: 116.39216565825716,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.effects.color += 2;
      yield;
    }
  }
}
