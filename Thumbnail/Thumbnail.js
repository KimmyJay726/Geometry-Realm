/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Thumbnail extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Star", "./Thumbnail/costumes/Star.svg", {
        x: 609.9906450000001,
        y: 503.71944499999995,
      }),
      new Costume("Star2", "./Thumbnail/costumes/Star2.svg", {
        x: 609.9906450000001,
        y: 503.71944499999995,
      }),
      new Costume("Star3", "./Thumbnail/costumes/Star3.svg", {
        x: 609.9906450000001,
        y: 503.71944499999995,
      }),
      new Costume("Star4", "./Thumbnail/costumes/Star4.svg", {
        x: 609.990645,
        y: 504.656945,
      }),
      new Costume("Star5", "./Thumbnail/costumes/Star5.svg", {
        x: 609.9906450000001,
        y: 503.71944499999995,
      }),
      new Costume("Star6", "./Thumbnail/costumes/Star6.svg", {
        x: 609.990645,
        y: 503.719445,
      }),
    ];

    this.sounds = [
      new Sound("Laser1", "./Thumbnail/sounds/Laser1.wav"),
      new Sound("Oops", "./Thumbnail/sounds/Oops.wav"),
      new Sound("Pop", "./Thumbnail/sounds/Pop.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.stage.watchers.characterstats.visible = false;
  }
}
