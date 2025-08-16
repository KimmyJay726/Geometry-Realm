/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Whitesquare extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("WhiteSquare", "./Whitesquare/costumes/WhiteSquare.png", {
        x: 358,
        y: 360,
      }),
      new Costume("WhiteSquare2", "./Whitesquare/costumes/WhiteSquare2.png", {
        x: 358,
        y: 360,
      }),
      new Costume("WhiteSquare3", "./Whitesquare/costumes/WhiteSquare3.svg", {
        x: 253.84972080161936,
        y: 253.8521802997475,
      }),
    ];

    this.sounds = [
      new Sound("Pop", "./Whitesquare/sounds/Pop.wav"),
      new Sound("audio", "./Whitesquare/sounds/audio.mp3"),
      new Sound("Oops", "./Whitesquare/sounds/Oops.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9),
    ];

    this.audioEffects.volume = 20;

    this.vars.angelspeed = 22.799999999999997;
  }

  *whenbackdropswitchesto() {
    yield* this.wait(0.1);
    while (!(this.compare(1, this.stage.vars.bossHealth) > 0)) {
      yield;
    }
    yield* this.startSound("Oops");
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    while (true) {
      if (this.compare(this.stage.vars.phase, 3) > 0) {
        if (
          this.touching(this.sprites["Apple"].andClones()) ||
          this.touching(this.sprites["Apple2"].andClones()) ||
          this.touching(this.sprites["Apple3"].andClones()) ||
          this.touching(this.sprites["Apple4"].andClones())
        ) {
          this.sprites["Bouncingbetty"].createClone();
          yield* this.wait(0.3448);
          yield* this.wait(0.3448);
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.moveAhead();
    this.stage.vars.phase = 0;
    this.stage.vars.rail = 0;
    this.stage.vars.rail2 = 0;
    this.stage.vars.rail3 = 0;
    this.stage.vars.rail4 = 0;
  }

  *whenGreenFlagClicked2() {}

  *whenGreenFlagClicked3() {}

  *whenGreenFlagClicked4() {}

  *whenGreenFlagClicked5() {}

  *whenGreenFlagClicked6() {}

  *whenGreenFlagClicked7() {}

  *whenGreenFlagClicked8() {
    while (true) {
      this.effects.color += 10;
      yield;
    }
  }

  *whenGreenFlagClicked9() {}

  *whenbackdropswitchesto3() {
    yield* this.wait(3);
    while (!!(this.toNumber(this.stage.vars.phase) === 0)) {
      this.move(2);
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 2)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 2)) {
      this.stage.vars.prev = this.stage.vars.apple;
      this.stage.vars.apple = this.random(1, 4);
      if (this.toNumber(this.stage.vars.apple) === 1) {
        yield* this.glide(
          0.3448,
          this.sprites["Apple"].x,
          this.sprites["Apple"].y
        );
      }
      if (this.toNumber(this.stage.vars.apple) === 2) {
        yield* this.glide(
          0.3448,
          this.sprites["Apple2"].x,
          this.sprites["Apple2"].y
        );
      }
      if (this.toNumber(this.stage.vars.apple) === 3) {
        yield* this.glide(
          0.3448,
          this.sprites["Apple3"].x,
          this.sprites["Apple3"].y
        );
      }
      if (this.toNumber(this.stage.vars.apple) === 4) {
        yield* this.glide(
          0.3448,
          this.sprites["Apple4"].x,
          this.sprites["Apple4"].y
        );
      }
      if (this.compare(this.stage.vars.apple, this.stage.vars.prev) === 0) {
        yield* this.glide(
          0.3448,
          this.sprites["Apple5"].x,
          this.sprites["Apple5"].y
        );
      }
      yield* this.wait(1.0334);
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 4)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 4)) {
      this.stage.vars.prev = this.stage.vars.apple;
      this.stage.vars.apple = this.random(1, 4);
      if (this.toNumber(this.stage.vars.apple) === 1) {
        yield* this.glide(
          0.3448,
          this.sprites["Apple"].x,
          this.sprites["Apple"].y
        );
      }
      if (this.toNumber(this.stage.vars.apple) === 2) {
        yield* this.glide(
          0.3448,
          this.sprites["Apple2"].x,
          this.sprites["Apple2"].y
        );
      }
      if (this.toNumber(this.stage.vars.apple) === 3) {
        yield* this.glide(
          0.3448,
          this.sprites["Apple3"].x,
          this.sprites["Apple3"].y
        );
      }
      if (this.toNumber(this.stage.vars.apple) === 4) {
        yield* this.glide(
          0.3448,
          this.sprites["Apple4"].x,
          this.sprites["Apple4"].y
        );
      }
      if (this.compare(this.stage.vars.apple, this.stage.vars.prev) === 0) {
        yield* this.glide(
          0.3448,
          this.sprites["Apple5"].x,
          this.sprites["Apple5"].y
        );
      }
      yield* this.wait(1.0334);
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 6)) {
      yield;
    }
    this.direction = this.random(0, 360);
    while (!!(this.toNumber(this.stage.vars.phase) === 6)) {
      this.stage.vars.angelaccel = 0.2;
      this.vars.angelspeed = 2;
      while (!this.touching("edge")) {
        this.vars.angelspeed =
          this.toNumber(this.vars.angelspeed) +
          this.toNumber(this.stage.vars.angelaccel);
        this.move(this.toNumber(this.vars.angelspeed));
        if (
          this.touching("edge") &&
          this.toNumber(this.stage.vars.phase) === 6
        ) {
          this.stage.vars.apple = this.random(1, 4);
          if (this.toNumber(this.stage.vars.apple) === 1) {
            yield* this.glide(
              0.3448,
              this.sprites["Apple"].x,
              this.sprites["Apple"].y
            );
          }
          if (this.toNumber(this.stage.vars.apple) === 2) {
            yield* this.glide(
              0.3448,
              this.sprites["Apple2"].x,
              this.sprites["Apple2"].y
            );
          }
          if (this.toNumber(this.stage.vars.apple) === 3) {
            yield* this.glide(
              0.3448,
              this.sprites["Apple3"].x,
              this.sprites["Apple3"].y
            );
          }
          if (this.toNumber(this.stage.vars.apple) === 4) {
            yield* this.glide(
              0.3448,
              this.sprites["Apple4"].x,
              this.sprites["Apple4"].y
            );
          }
          this.direction = this.radToScratch(
            Math.atan2(
              this.sprites["Etriangle"].y - this.y,
              this.sprites["Etriangle"].x - this.x
            )
          );
          this.direction += this.random(-15, 15);
          this.stage.vars.angelaccel += 0.025;
          this.vars.angelspeed = 2;
        }
        yield;
      }
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 8)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 8)) {
      this.stage.vars.prev = this.stage.vars.apple;
      this.stage.vars.apple = this.random(1, 4);
      if (this.toNumber(this.stage.vars.apple) === 1) {
        yield* this.glide(
          0.1724,
          this.sprites["Apple"].x,
          this.sprites["Apple"].y
        );
      }
      if (this.toNumber(this.stage.vars.apple) === 2) {
        yield* this.glide(
          0.1724,
          this.sprites["Apple2"].x,
          this.sprites["Apple2"].y
        );
      }
      if (this.toNumber(this.stage.vars.apple) === 3) {
        yield* this.glide(
          0.1724,
          this.sprites["Apple3"].x,
          this.sprites["Apple3"].y
        );
      }
      if (this.toNumber(this.stage.vars.apple) === 4) {
        yield* this.glide(
          0.1724,
          this.sprites["Apple4"].x,
          this.sprites["Apple4"].y
        );
      }
      if (this.compare(this.stage.vars.apple, this.stage.vars.prev) === 0) {
        yield* this.glide(
          0.1724,
          this.sprites["Apple5"].x,
          this.sprites["Apple5"].y
        );
      }
      yield* this.wait(1.0334);
      yield;
    }
  }

  *whenbackdropswitchesto4() {}

  *whenbackdropswitchesto5() {
    while (!(this.toNumber(this.stage.vars.phase) === 1)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 1)) {
      this.sprites["Lightning"].createClone();
      this.sprites["Lightning2"].createClone();
      this.sprites["Lightning3"].createClone();
      this.sprites["Lightning4"].createClone();
      yield* this.wait(1.3793);
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 9)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 9)) {
      this.sprites["Lightning"].createClone();
      this.sprites["Lightning2"].createClone();
      this.sprites["Lightning3"].createClone();
      this.sprites["Lightning4"].createClone();
      yield* this.wait(1.3793);
      yield;
    }
  }

  *whenbackdropswitchesto6() {
    yield* this.wait(3);
    yield* this.wait(1.3793);
    while (!(this.toNumber(this.stage.vars.phase) === 6)) {
      this.sprites["Pencil2"].createClone();
      this.sprites["Pencil3"].createClone();
      this.sprites["Pencil11"].createClone();
      this.sprites["Pencil12"].createClone();
      yield* this.wait(1.3793);
      this.sprites["Pencil"].createClone();
      this.sprites["Pencil8"].createClone();
      this.sprites["Pencil9"].createClone();
      yield* this.wait(1.3793);
      yield;
    }
  }

  *whenbackdropswitchesto7() {
    while (!(this.toNumber(this.stage.vars.phase) === 2)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 2)) {
      this.sprites["Pencil10"].createClone();
      yield* this.wait(0.3448);
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 3)) {
      yield;
    }
    yield* this.glide(
      0.3448,
      this.sprites["Apple5"].x,
      this.sprites["Apple5"].y
    );
    while (!!(this.toNumber(this.stage.vars.phase) === 3)) {
      this.effects.whirl += 50;
      this.size += 0.2;
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 4)) {
      yield;
    }
    this.size = 14;
    while (!!(this.toNumber(this.stage.vars.phase) === 4)) {
      null;
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 5)) {
      yield;
    }
    yield* this.glide(
      0.3448,
      this.sprites["Apple5"].x,
      this.sprites["Apple5"].y
    );
    this.costume = "WhiteSquare3";
    while (!!(this.toNumber(this.stage.vars.phase) === 5)) {
      null;
      yield;
    }
    this.visible = false;
    while (!(this.toNumber(this.stage.vars.phase) === 6)) {
      yield;
    }
    this.size = 5;
    while (!!(this.toNumber(this.stage.vars.phase) === 6)) {
      null;
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 7)) {
      yield;
    }
    this.size = 26;
    yield* this.glide(
      0.3448,
      this.sprites["Apple5"].x,
      this.sprites["Apple5"].y
    );
    this.visible = true;
    while (!!(this.toNumber(this.stage.vars.phase) === 7)) {
      this.goto(this.sprites["Apple5"].x, this.sprites["Apple5"].y);
      this.effects.whirl -= 3;
      this.size -= 0.015;
      yield;
    }
    while (!(this.toNumber(this.stage.vars.phase) === 8)) {
      yield;
    }
    this.goto(this.sprites["Apple5"].x, this.sprites["Apple5"].y);
    while (true) {
      this.sprites["Pencil2"].createClone();
      this.sprites["Pencil3"].createClone();
      this.sprites["Pencil11"].createClone();
      this.sprites["Pencil12"].createClone();
      yield* this.wait(0.68965);
      this.sprites["Pencil"].createClone();
      this.sprites["Pencil8"].createClone();
      this.sprites["Pencil9"].createClone();
      yield* this.wait(0.68965);
      yield;
    }
  }

  *whenbackdropswitchesto8() {
    yield* this.wait(3);
    while (!!(this.toNumber(this.stage.vars.phase) === 0)) {
      this.direction += 1;
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 1)) {
      this.direction += 1;
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 2)) {
      this.direction -= 15;
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 3)) {
      this.direction -= 30;
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 4)) {
      this.direction -= 15;
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 5)) {
      this.direction -= 30;
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 6)) {
      null;
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 7)) {
      this.direction += 5;
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 8)) {
      this.direction -= 35;
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 9)) {
      this.direction -= 5;
      yield;
    }
  }

  *whenbackdropswitchesto9() {
    yield* this.wait(3);
    yield* this.wait(1.3793);
    while (true) {
      this.sprites["Arrow1"].createClone();
      yield* this.wait(5.5172);
      this.sprites["Arrow3"].createClone();
      yield* this.wait(5.5172);
      this.sprites["Arrow5"].createClone();
      yield* this.wait(5.5172);
      this.sprites["Arrow7"].createClone();
      yield* this.wait(5.5172);
      yield;
    }
  }

  *whenbackdropswitchesto10() {}

  *whenbackdropswitchesto11() {
    yield* this.wait(3);
    yield* this.wait(1.3793);
    while (!(this.toNumber(this.stage.vars.phase) === 2)) {
      this.sprites["Pencil2"].createClone();
      this.sprites["Pencil3"].createClone();
      yield* this.wait(1.3793);
      this.sprites["Pencil"].createClone();
      this.sprites["Pencil8"].createClone();
      this.sprites["Pencil9"].createClone();
      yield* this.wait(1.3793);
      yield;
    }
  }

  *whenbackdropswitchesto12() {
    yield* this.wait(3);
    yield* this.wait(1.3793);
    while (true) {
      this.sprites["Arrow1"].createClone();
      yield* this.wait(5.5172);
      this.sprites["Arrow3"].createClone();
      yield* this.wait(5.5172);
      this.sprites["Arrow5"].createClone();
      yield* this.wait(5.5172);
      this.sprites["Arrow7"].createClone();
      yield* this.wait(5.5172);
      yield;
    }
  }

  *whenbackdropswitchesto13() {
    this.stage.watchers.bossHealth.visible = false;
    this.stage.vars.bossHealth = 1500;
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
  }

  *whenbackdropswitchesto14() {
    this.direction = 90;
    this.sprites["Boss2Mask"].createClone();
    this.costume = "WhiteSquare2";
    this.size = 1;
    this.visible = false;
    this.goto(0, 115);
    yield* this.wait(3);
    this.stage.watchers.bossHealth.visible = true;
    this.audioEffects.volume = 20;
    yield* this.startSound("audio");
    this.visible = true;
    for (let i = 0; i < 13; i++) {
      this.size += 1;
      yield;
    }
    yield* this.wait(65);
    this.stage.vars.phase = 1;
    yield* this.glide(23, 0, 0);
    this.stage.vars.phase = 2;
    yield* this.wait(9);
    this.stage.vars.phase = 3;
    yield* this.wait(2);
    this.stage.vars.phase = 4;
    yield* this.wait(20);
    this.stage.vars.phase = 5;
    yield* this.wait(2);
    this.stage.vars.phase = 6;
    yield* this.wait(32);
    this.stage.vars.phase = 7;
    yield* this.wait(23);
    this.stage.vars.phase = 8;
    yield* this.wait(9);
    yield* this.glide(
      0.3448,
      this.sprites["Apple5"].x,
      this.sprites["Apple5"].y
    );
    for (let i = 0; i < 15; i++) {
      this.sprites["Pencil10"].createClone();
      yield;
    }
    yield* this.wait(12);
    this.stage.vars.phase = 9;
    yield* this.glide(
      0.3448,
      this.sprites["Apple5"].x,
      this.sprites["Apple5"].y
    );
    while (true) {
      this.goto(this.sprites["Apple5"].x, this.sprites["Apple5"].y);
      yield;
    }
  }

  *whenbackdropswitchesto15() {}

  *whenbackdropswitchesto16() {
    while (true) {
      if (this.compare(this.stage.vars.phase, 3) > 0) {
        if (
          this.touching(this.sprites["Apple"].andClones()) ||
          this.touching(this.sprites["Apple2"].andClones()) ||
          this.touching(this.sprites["Apple3"].andClones()) ||
          this.touching(this.sprites["Apple4"].andClones())
        ) {
          this.sprites["Bouncingbetty"].createClone();
          yield* this.wait(0.3448);
          yield* this.wait(0.3448);
        }
      }
      yield;
    }
  }
}
