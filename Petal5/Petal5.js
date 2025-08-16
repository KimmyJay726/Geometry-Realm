/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Petal5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Sakura Projectile",
        "./Petal5/costumes/Sakura Projectile.svg",
        { x: 162, y: 164 }
      ),
      new Costume(
        "Sakura Projectile3",
        "./Petal5/costumes/Sakura Projectile3.svg",
        { x: 119.61899798588072, y: 77.83991885573423 }
      ),
      new Costume(
        "Sakura Projectile2",
        "./Petal5/costumes/Sakura Projectile2.png",
        { x: 324, y: 320 }
      ),
      new Costume("Sun", "./Petal5/costumes/Sun.svg", { x: 54, y: 54 }),
    ];

    this.sounds = [new Sound("Laser2", "./Petal5/sounds/Laser2.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
    ];
  }

  *startAsClone() {
    while (true) {
      if (this.touching(this.sprites["Hourstar"].andClones())) {
        this.direction = this.radToScratch(
          Math.atan2(
            this.sprites["Etriangle"].y - this.y,
            this.sprites["Etriangle"].x - this.x
          )
        );
      }
      yield;
    }
  }

  *startAsClone2() {
    this.goto(
      this.toNumber(
        this.itemOf(
          this.stage.vars.explodex,
          this.stage.vars.explodecounter - 1
        )
      ),
      this.toNumber(
        this.itemOf(
          this.stage.vars.explodey,
          this.stage.vars.explodecounter - 1
        )
      )
    );
    this.visible = true;
    this.direction = 214;
    while (!this.touching("edge")) {
      this.move(5);
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone3() {}

  *startAsClone4() {}
}
