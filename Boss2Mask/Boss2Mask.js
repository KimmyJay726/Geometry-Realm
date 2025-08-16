/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Boss2Mask extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("spear2", "./Boss2Mask/costumes/spear2.svg", {
        x: 94.25,
        y: 91.25,
      }),
      new Costume("spear3", "./Boss2Mask/costumes/spear3.svg", {
        x: 253.7308257193145,
        y: 253.77063672814816,
      }),
    ];

    this.sounds = [new Sound("Pop", "./Boss2Mask/sounds/Pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
    ];
  }

  *whenbackdropswitchesto() {
    while (true) {
      if (this.compare(this.stage.vars.phase, 3) > 0) {
        if (
          this.touching(this.sprites["Apple"].andClones()) ||
          this.touching(this.sprites["Apple2"].andClones()) ||
          this.touching(this.sprites["Apple3"].andClones()) ||
          this.touching(this.sprites["Apple4"].andClones())
        ) {
          this.sprites["Bouncingbetty2"].createClone();
          yield* this.wait(0.3448);
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.goto(this.sprites["Whitesquare"].x, this.sprites["Whitesquare"].y);
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.direction -= 30;
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      this.effects.color += 10;
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      while (!(this.compare(1, this.stage.vars.bossHealth) > 0)) {
        if (
          this.touching(this.sprites["Crystal"].andClones()) ||
          this.touching(this.sprites["Crystal2"].andClones()) ||
          this.touching(this.sprites["Crystal3"].andClones()) ||
          this.touching(this.sprites["Crystal4"].andClones()) ||
          this.touching(this.sprites["Crystal5"].andClones()) ||
          this.touching(this.sprites["Crystal7"].andClones())
        ) {
          yield* this.startSound("Pop");
          this.stage.vars.bossHealth--;
        }
        yield;
      }
      yield;
    }
  }

  *whenbackdropswitchesto2() {
    this.size = 14;
    this.visible = false;
    while (!(this.toNumber(this.stage.vars.phase) === 3)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 3)) {
      this.effects.whirl += 50;
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 6)) {
      yield;
    }
    this.visible = true;
    while (!(this.toNumber(this.stage.vars.phase) === 7)) {
      yield;
    }
    yield* this.glide(
      0.3448,
      this.sprites["Apple5"].x,
      this.sprites["Apple5"].y
    );
    this.visible = false;
  }

  *whenbackdropswitchesto3() {
    while (!(this.toNumber(this.stage.vars.phase) === 6)) {
      yield;
    }
    while (true) {
      this.size += 0.008;
      yield;
    }
  }
}
