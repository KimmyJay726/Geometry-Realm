/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Crystal7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("crystal-b", "./Crystal7/costumes/crystal-b.svg", {
        x: 23.51640968134697,
        y: 9.119566514314613,
      }),
    ];

    this.sounds = [
      new Sound("Magic Spell", "./Crystal7/sounds/Magic Spell.wav"),
      new Sound("collect", "./Crystal7/sounds/collect.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *startAsClone() {
    this.goto(this.sprites["Etriangle"].x, this.sprites["Etriangle"].y);
    this.visible = true;
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Whitesquare"].y - this.y,
        this.sprites["Whitesquare"].x - this.x
      )
    );
    while (
      !(
        this.touching("edge") ||
        this.touching(this.sprites["Star"].andClones()) ||
        this.touching(this.sprites["Whitesquare"].andClones()) ||
        this.touching(this.sprites["Boss2Mask"].andClones())
      )
    ) {
      this.move(this.toNumber(this.stage.vars.characterbulletspeed));
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      this.effects.color += 25;
      yield;
    }
  }
}
