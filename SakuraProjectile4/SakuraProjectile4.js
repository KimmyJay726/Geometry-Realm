/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SakuraProjectile4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Sakura Projectile",
        "./SakuraProjectile4/costumes/Sakura Projectile.svg",
        { x: 162, y: 164 }
      ),
      new Costume(
        "Sakura Projectile4",
        "./SakuraProjectile4/costumes/Sakura Projectile4.svg",
        { x: 162, y: 164 }
      ),
      new Costume(
        "Sakura Projectile3",
        "./SakuraProjectile4/costumes/Sakura Projectile3.svg",
        { x: 119.61899798588072, y: 77.83991885573423 }
      ),
      new Costume(
        "Sakura Projectile2",
        "./SakuraProjectile4/costumes/Sakura Projectile2.png",
        { x: 324, y: 320 }
      ),
      new Costume("Sun", "./SakuraProjectile4/costumes/Sun.svg", {
        x: 54,
        y: 54,
      }),
    ];

    this.sounds = [
      new Sound("Laser2", "./SakuraProjectile4/sounds/Laser2.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
    ];
  }

  *startAsClone() {
    this.effects.pixelate = 0;
    this.size = this.random(5, 10);
    this.visible = true;
    this.goto(this.random(-230, 230), -170);
    this.direction = 0;
    while (!this.touching("edge")) {
      this.move(5);
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {}

  *startAsClone3() {}
}
