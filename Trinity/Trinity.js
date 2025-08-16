/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Trinity extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "output-onlinepngtools (5)",
        "./Trinity/costumes/output-onlinepngtools (5).svg",
        { x: 119.5, y: 138.5 }
      ),
    ];

    this.sounds = [
      new Sound("audio", "./Trinity/sounds/audio.mp3"),
      new Sound("Oops", "./Trinity/sounds/Oops.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.audioEffects.volume = 10;
  }

  *whenbackdropswitchesto() {
    this.stage.vars.phase = 1;
    yield* this.wait(3);
    yield* this.wait(31.5);
    this.stage.vars.phase = 2;
    yield* this.wait(14);
    this.stage.vars.phase = 3;
    yield* this.wait(14);
    this.stage.vars.phase = 4;
    yield* this.wait(12);
    this.stage.vars.phase = 5;
    yield* this.wait(15);
    this.stage.vars.phase = 6;
    yield* this.wait(15);
    this.stage.vars.phase = 7;
    yield* this.wait(23);
    this.stage.vars.phase = 8;
    yield* this.wait(15);
    this.stage.vars.phase = 9;
    yield* this.wait(18);
    this.stage.vars.phase = 10;
    yield* this.wait(12);
    this.stage.vars.phase = 10.5;
    yield* this.wait(7);
    this.stage.vars.phase = 11;
    yield* this.wait(8);
    this.visible = false;
    this.stage.vars.bossHealth = 0;
    yield* this.startSound("Oops");
  }

  *whenbackdropswitchesto2() {
    yield* this.wait(1);
    this.audioEffects.volume = 10;
    yield* this.startSound("audio");
    this.direction = 90;
    this.stage.vars.bossHealth = -666;
  }

  *whenGreenFlagClicked() {
    this.goto(0, 170);
    this.moveAhead();
    this.effects.color = 0;
    this.direction = 90;
    this.visible = false;
  }

  *whenbackdropswitchesto3() {
    while (true) {
      this.direction += 17 - this.toNumber(this.stage.vars.phase);
      yield;
    }
  }

  *whenbackdropswitchesto4() {
    while (!(this.toNumber(this.stage.vars.phase) === 2)) {
      yield;
    }
    this.visible = true;
    this.stage.watchers.bossHealth.visible = true;
    yield* this.glide(0.2857, 0, 125);
    yield* this.wait(0.8572);
    while (!!(this.toNumber(this.stage.vars.phase) === 2)) {
      for (let i = 0; i < 15; i++) {
        this.sprites["Sword"].createClone();
        yield;
      }
      yield* this.wait(0.2857);
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 3)) {
      for (let i = 0; i < 2; i++) {
        this.sprites["Cross3"].createClone();
        yield* this.wait(0.2857);
        this.sprites["Cross4"].createClone();
        yield;
      }
      yield* this.wait(0.2857);
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 4)) {
      for (let i = 0; i < 2; i++) {
        for (let i = 0; i < 13; i++) {
          this.sprites["Sword"].createClone();
          yield;
        }
        yield* this.wait(0.2857);
        this.sprites["Cross4"].createClone();
        this.sprites["Cross3"].createClone();
        yield* this.wait(0.2857);
        yield;
      }
      yield* this.wait(0.2857);
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 5)) {
      for (let i = 0; i < 1; i++) {
        this.sprites["Spear"].createClone();
        yield;
      }
      yield* this.wait(0.2857);
      yield;
    }
    yield* this.wait(4);
    while (!!(this.toNumber(this.stage.vars.phase) === 6)) {
      for (let i = 0; i < 6; i++) {
        this.sprites["Spear2"].createClone();
        this.sprites["Angel"].createClone();
        yield;
      }
      yield* this.wait(0.2857);
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 7)) {
      for (let i = 0; i < 8; i++) {
        this.sprites["Spear2"].createClone();
        this.sprites["Angel"].createClone();
        yield;
      }
      yield* this.wait(0.2857);
      yield;
    }
    yield* this.wait(2);
    while (!!(this.toNumber(this.stage.vars.phase) === 8)) {
      for (let i = 0; i < 6; i++) {
        this.sprites["Spear4"].createClone();
        for (let i = 0; i < 3; i++) {
          this.sprites["Sword"].createClone();
          yield;
        }
        yield;
      }
      yield* this.wait(0.2857);
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 9)) {
      for (let i = 0; i < 8; i++) {
        this.sprites["Spear2"].createClone();
        this.sprites["Spear4"].createClone();
        for (let i = 0; i < 3; i++) {
          this.sprites["Sword"].createClone();
          yield;
        }
        yield;
      }
      yield* this.wait(0.2857);
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 10)) {
      yield* this.glide(0.2857, this.random(-240, 240), this.random(-180, 180));
      for (let i = 0; i < 2; i++) {
        this.sprites["Spear5"].createClone();
        yield;
      }
      yield;
    }
    yield* this.glide(0.2857, 0, 0);
    this.stage.vars.phase = 16;
    while (!(this.toNumber(this.stage.vars.phase) === 11)) {
      yield;
    }
    yield* this.wait(0.1);
    this.stage.vars.phase = 16;
  }

  *whenbackdropswitchesto5() {
    while (true) {
      this.effects.color += 25;
      yield;
    }
  }
}
