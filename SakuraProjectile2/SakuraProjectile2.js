/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SakuraProjectile2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Sakura Projectile",
        "./SakuraProjectile2/costumes/Sakura Projectile.svg",
        { x: 162, y: 164 }
      ),
      new Costume(
        "Sakura Projectile2",
        "./SakuraProjectile2/costumes/Sakura Projectile2.png",
        { x: 324, y: 320 }
      ),
      new Costume("Sun", "./SakuraProjectile2/costumes/Sun.svg", {
        x: 54,
        y: 54,
      }),
    ];

    this.sounds = [
      new Sound("Laser2", "./SakuraProjectile2/sounds/Laser2.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(Trigger.CLONE_START, this.startAsClone6),
      new Trigger(Trigger.CLONE_START, this.startAsClone7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone8),
    ];

    this.vars.flowernumber = 0;
  }

  *startAsClone() {
    this.vars.flowernumber++;
    this.size = this.random(3, 5);
    this.moveAhead();
    this.visible = true;
    if (this.toNumber(this.stage.vars.upwards) === 1) {
      this.goto(this.random(-200, 200), -170);
      this.direction = 0;
    } else {
      this.goto(this.random(-200, 200), 170);
      this.direction = 180;
    }
    if (3 === this.toNumber(this.stage.vars.flowerspeed)) {
      if (this.random(1, 2) === 1) {
        while (!this.touching("edge")) {
          this.move(1);
          yield;
        }
      } else {
        if (this.random(1, 2) === 1) {
          while (!this.touching("edge")) {
            this.move(2);
            yield;
          }
        } else {
          while (!this.touching("edge")) {
            this.move(3);
            yield;
          }
        }
      }
    } else {
      while (!this.touching("edge")) {
        this.move(1);
        yield;
      }
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    yield* this.wait(this.random(0, 5));
    if (this.random(1, 2) === 1) {
      while (true) {
        this.direction -= 0.25;
        yield;
      }
    } else {
      while (true) {
        this.direction += 0.25;
        yield;
      }
    }
  }

  *startAsClone3() {
    if (this.random(1, 2) === 1) {
      null;
    } else {
      while (true) {
        this.effects.color += 5;
        yield;
      }
    }
  }

  *startAsClone4() {
    while (!(this.toNumber(this.stage.vars.phase) === 2)) {
      yield;
    }
    while (!this.touching("edge")) {
      this.move(9);
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone5() {
    if (this.toNumber(this.stage.vars.phase) === 4) {
      yield* this.wait(3);
      this.stage.vars.explodey.push(this.y);
      this.stage.vars.explodex.push(this.x);
      yield* this.wait(this.random(1e-8, 0.001));
      this.stage.vars.explodecounter++;
      this.sprites["Petal1"].createClone();
      this.sprites["Petal2"].createClone();
      this.sprites["Petal3"].createClone();
      this.sprites["Petal4"].createClone();
      this.sprites["Petal5"].createClone();
      this.deleteThisClone();
    }
  }

  *startAsClone6() {
    while (!(this.toNumber(this.stage.vars.upwards) === 1)) {
      yield;
    }
    this.direction = 0;
    while (!(this.toNumber(this.stage.vars.upwards) === 0)) {
      yield;
    }
    this.direction = 180;
  }

  *startAsClone7() {}

  *whenGreenFlagClicked() {
    this.stage.vars.flowerlocationsx = [];
    this.stage.vars.flowerlocationsy = [];
    this.stage.vars.explodex = [];
    this.stage.vars.explodey = [];
    this.vars.flowernumber = 0;
    this.stage.vars.explodecounter = 0;
  }

  *startAsClone8() {
    while (!(this.toNumber(this.stage.vars.flowerspeed) === 4)) {
      yield;
    }
    while (!this.touching("edge")) {
      this.move(9);
      yield;
    }
    this.deleteThisClone();
  }
}
