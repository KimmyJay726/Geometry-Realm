/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Apple5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("apple", "./Apple5/costumes/apple.svg", { x: 31, y: 31 }),
    ];

    this.sounds = [new Sound("Chomp", "./Apple5/sounds/Chomp.wav")];

    this.triggers = [];
  }
}
