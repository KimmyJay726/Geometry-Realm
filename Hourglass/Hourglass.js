/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hourglass extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume4", "./Hourglass/costumes/costume4.svg", {
        x: 52.931533098150624,
        y: 70.81585293591249,
      }),
      new Costume("costume5", "./Hourglass/costumes/costume5.svg", {
        x: 52.931541196301254,
        y: 70.81585087182499,
      }),
      new Costume("costume6", "./Hourglass/costumes/costume6.svg", {
        x: 52.931541196301254,
        y: 70.81585087182499,
      }),
      new Costume("costume2", "./Hourglass/costumes/costume2.svg", {
        x: 50.11855579753421,
        y: 69.31393224788333,
      }),
      new Costume("costume1", "./Hourglass/costumes/costume1.svg", {
        x: 36.22636843368977,
        y: 60.083140477362605,
      }),
      new Costume("costume3", "./Hourglass/costumes/costume3.svg", {
        x: 50.11855579753421,
        y: 69.31393224788333,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Hourglass/sounds/pop.wav"),
      new Sound("audio", "./Hourglass/sounds/audio.mp3"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.audioEffects.volume = 7;
  }

  *whenbackdropswitchesto() {
    this.stage.vars.flowerspeed = 1;
    this.stage.vars.upwards = 0;
    this.stage.vars.pendelum = 0;
    this.goto(0, 130);
    this.moveAhead();
    this.size = 1;
    yield* this.wait(1);
    this.stage.vars.bossHealth = -666;
    this.audioEffects.volume = 7;
    yield* this.startSound("audio");
    yield* this.wait(1);
    this.visible = true;
    for (let i = 0; i < 30; i++) {
      this.size += 1;
      yield;
    }
    yield* this.glide(18, 0, 0);
  }

  *whenGreenFlagClicked() {
    this.direction = 90;
    this.visible = false;
    while (true) {
      this.effects.color += 5;
      yield;
    }
  }

  *whenbackdropswitchesto2() {
    yield* this.wait(1);
    while (!!(this.toNumber(this.stage.vars.phase) === 0)) {
      if (this.toNumber(this.stage.vars.pendelum) % 4 === 0) {
        while (
          !(
            !(this.toNumber(this.stage.vars.pendelum) % 4 === 0) ||
            !(this.toNumber(this.stage.vars.phase) === 0)
          )
        ) {
          this.direction += 0.4;
          yield;
        }
      }
      if (this.toNumber(this.stage.vars.pendelum) % 4 === 1) {
        while (
          !(
            !(this.toNumber(this.stage.vars.pendelum) % 4 === 1) ||
            !(this.toNumber(this.stage.vars.phase) === 0)
          )
        ) {
          this.direction -= 0.4;
          yield;
        }
      }
      if (this.toNumber(this.stage.vars.pendelum) % 4 === 2) {
        while (
          !(
            !(this.toNumber(this.stage.vars.pendelum) % 4 === 2) ||
            !(this.toNumber(this.stage.vars.phase) === 0)
          )
        ) {
          this.direction -= 0.4;
          yield;
        }
      }
      if (this.toNumber(this.stage.vars.pendelum) % 4 === 3) {
        while (
          !(
            !(this.toNumber(this.stage.vars.pendelum) % 4 === 3) ||
            !(this.toNumber(this.stage.vars.phase) === 0)
          )
        ) {
          this.direction += 0.4;
          yield;
        }
      }
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 1)) {
      yield;
    }
    while (
      !(
        !(this.toNumber(this.stage.vars.phase) === 1) ||
        (this.compare(this.direction, -90) > 0 &&
          this.compare(this.direction, 0) < 0)
      )
    ) {
      this.direction += 0.5;
      yield;
    }
    this.direction = -90;
    this.stage.vars.pendelum = 0;
    while (!(this.toNumber(this.stage.vars.phase) === 2)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 2)) {
      this.sprites["SakuraProjectile3"].createClone();
      this.sprites["SakuraProjectile3"].createClone();
      this.sprites["SakuraProjectile4"].createClone();
      this.direction -= 15;
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 3)) {
      yield;
    }
    if (!(this.compare(90, this.direction) < 0)) {
      while (!(this.compare(90, this.direction) < 0)) {
        this.direction += 5;
        yield;
      }
    } else {
      for (let i = 0; i < 10; i++) {
        this.direction = 90;
        yield;
      }
    }
    yield* this.wait(3);
    if (
      !(
        this.compare(this.direction, -90) > 0 &&
        this.compare(this.direction, 0) < 0
      )
    ) {
      while (
        !(
          this.compare(this.direction, -90) > 0 &&
          this.compare(this.direction, 0) < 0
        )
      ) {
        this.direction += 5;
        yield;
      }
    } else {
      for (let i = 0; i < 10; i++) {
        this.direction = -90;
        yield;
      }
    }
    this.stage.vars.upwards = 1;
    this.direction = -90;
    yield* this.wait(5);
    for (let i = 0; i < 10; i++) {
      this.sprites["Hourstar"].createClone();
      yield;
    }
    yield* this.wait(5);
    yield* this.wait(5);
    if (!(this.compare(90, this.direction) < 0)) {
      while (!(this.compare(90, this.direction) < 0)) {
        this.direction += 5;
        yield;
      }
    } else {
      for (let i = 0; i < 10; i++) {
        this.direction = 90;
        yield;
      }
    }
    this.stage.vars.upwards = 0;
    this.direction = 90;
    yield* this.wait(11);
    this.stage.vars.phase = 4;
    yield* this.wait(2);
    this.stage.vars.flowerspeed = 4;
    yield* this.wait(0.1);
    this.stage.vars.flowerspeed = 3;
  }

  *whenbackdropswitchesto3() {
    yield* this.wait(1);
    while (!!(this.toNumber(this.stage.vars.phase) === 0)) {
      yield* this.wait(2);
      this.stage.vars.pendelum++;
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 2)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 2)) {
      yield* this.wait(0.1724);
      yield;
    }
  }

  *whenbackdropswitchesto4() {
    yield* this.wait(3);
    while (!!(this.toNumber(this.stage.vars.phase) === 0)) {
      this.sprites["SakuraProjectile2"].createClone();
      this.sprites["SakuraProjectile2"].createClone();
      this.sprites["SakuraProjectile2"].createClone();
      this.sprites["SakuraProjectile2"].createClone();
      yield* this.wait(0.5);
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 3)) {
      yield;
    }
    yield* this.wait(1);
    while (!!(this.toNumber(this.stage.vars.phase) === 3)) {
      this.sprites["SakuraProjectile2"].createClone();
      this.sprites["SakuraProjectile2"].createClone();
      this.sprites["SakuraProjectile2"].createClone();
      this.sprites["SakuraProjectile2"].createClone();
      yield* this.wait(0.5);
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 4)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 4)) {
      this.sprites["SakuraProjectile2"].createClone();
      yield* this.wait(0.25);
      yield;
    }
  }

  *whenbackdropswitchesto5() {
    this.stage.vars.phase = 0;
    yield* this.wait(60);
    this.stage.vars.phase = 1;
    yield* this.wait(11);
    this.stage.vars.phase = 2;
    yield* this.wait(20);
    this.stage.vars.phase = 3;
  }
}
