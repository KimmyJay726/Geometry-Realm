/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Poptart extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Poptart", "./Poptart/costumes/Poptart.png", {
        x: 160,
        y: 200,
      }),
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
