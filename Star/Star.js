/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Star extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Star", "./Star/costumes/Star.png", { x: 350, y: 356 }),
      new Costume("Sun", "./Star/costumes/Sun.svg", {
        x: 65.25,
        y: 67.56815354655767,
      }),
      new Costume("Sun2", "./Star/costumes/Sun2.svg", {
        x: 56.952380000000005,
        y: 54.518519999999995,
      }),
    ];

    this.sounds = [
      new Sound("Laser1", "./Star/sounds/Laser1.wav"),
      new Sound("Oops", "./Star/sounds/Oops.wav"),
      new Sound("Pop", "./Star/sounds/Pop.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
    ];

    this.audioEffects.volume = 20;
  }

  *whenGreenFlagClicked() {}

  *startAsClone() {
    this.size = 5;
    yield* this.glide(
      0.9,
      this.sprites["Etriangle"].x,
      this.sprites["Etriangle"].y
    );
    this.costume = "Sun";
    for (let i = 0; i < 6; i++) {
      yield* this.wait(0.1);
      this.costumeNumber++;
      this.size += 3;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      this.direction += 20;
      yield;
    }
  }

  *whenGreenFlagClicked2() {}

  *whenGreenFlagClicked3() {}

  *whenGreenFlagClicked4() {}

  *whenGreenFlagClicked5() {}

  *whenGreenFlagClicked6() {}

  *whenbackdropswitchesto() {}

  *whenbackdropswitchesto2() {
    this.costume = "Star";
    this.stage.vars.phase = 1;
    this.direction = 90;
    this.goto(0, 160);
    this.visible = false;
    yield* this.wait(4.5);
    this.visible = true;
    yield* this.glide(1, 0, 120);
    this.stage.watchers.bossHealth.visible = true;
  }

  *whenbackdropswitchesto3() {
    yield* this.wait(2.3);
    yield* this.wait(49.5);
    this.stage.vars.phase = 1.5;
    yield* this.wait(7.8);
    this.stage.vars.phase = 2;
    yield* this.wait(14.6);
    while (!(this.compare(1, this.stage.vars.bossHealth) > 0)) {
      this.stage.vars.phase = 3;
      yield* this.wait(15.6);
      this.stage.vars.phase = 4;
      yield* this.wait(20);
      this.stage.vars.phase = 4.5;
      yield* this.wait(13.1);
      this.stage.vars.phase = 5;
      yield* this.wait(20);
      this.stage.vars.phase = 6;
      yield* this.wait(20);
      yield;
    }
  }

  *whenbackdropswitchesto4() {
    yield* this.wait(4.5);
    while (!!(this.toNumber(this.stage.vars.phase) === 1)) {
      this.direction += 3;
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 1)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 1.5)) {
      this.direction -= 15;
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 1.5)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 2)) {
      this.direction += 15;
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 2)) {
      yield;
    }
    while (!(this.compare(1, this.stage.vars.bossHealth) > 0)) {
      while (!!(this.toNumber(this.stage.vars.phase) === 3)) {
        this.direction += 15;
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 3)) {
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 4)) {
        this.direction -= 15;
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 4)) {
        yield;
      }
      this.direction = 90;
      yield* this.wait(4);
      yield* this.glide(5.6, 0, 0);
      while (!!(this.toNumber(this.stage.vars.phase) === 4.5)) {
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 5)) {
        this.direction -= 15;
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 5)) {
        yield;
      }
      yield* this.glide(0.5, 0, 120);
      while (!!(this.toNumber(this.stage.vars.phase) === 6)) {
        this.direction += 15;
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 6)) {
        yield;
      }
      yield;
    }
  }

  *whenbackdropswitchesto5() {
    yield* this.wait(9.6);
    if (this.toNumber(this.stage.vars.natemode) === 1) {
      while (true) {
        while (
          !(
            !(this.toNumber(this.stage.vars.phase) === 4) ||
            this.toNumber(this.stage.vars.phase) === 4.5 ||
            this.toNumber(this.stage.vars.phase) === 5
          )
        ) {
          yield;
        }
        this.createClone();
        yield* this.wait(1.8);
        yield;
      }
    } else {
      while (true) {
        while (
          !(
            !(this.toNumber(this.stage.vars.phase) === 4) ||
            this.toNumber(this.stage.vars.phase) === 4.5 ||
            this.toNumber(this.stage.vars.phase) === 5
          )
        ) {
          yield;
        }
        this.sprites["TrackerV3"].createClone();
        yield* this.wait(1.8);
        yield;
      }
    }
  }

  *whenbackdropswitchesto6() {
    yield* this.wait(9.6);
    while (!!(this.toNumber(this.stage.vars.phase) === 1)) {
      this.sprites["Bullet"].createClone();
      this.sprites["Bullet"].createClone();
      this.sprites["Bullet"].createClone();
      this.sprites["Bullet"].createClone();
      this.sprites["Bullet"].createClone();
      yield* this.wait(1.8);
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 1)) {
      yield;
    }
    this.sprites["Wallspike"].createClone();
    yield* this.wait(1.8);
    this.sprites["Wallspike3"].createClone();
    yield* this.wait(1.8);
    this.sprites["Wallspike2"].createClone();
    yield* this.wait(1.8);
    this.sprites["Wallspike4"].createClone();
    while (!!(this.toNumber(this.stage.vars.phase) === 1.5)) {
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 2)) {
      this.sprites["Bullet"].createClone();
      yield* this.wait(0.1);
      yield;
    }
    while (!!(this.toNumber(this.stage.vars.phase) === 2)) {
      yield;
    }
    while (!(this.compare(1, this.stage.vars.bossHealth) > 0)) {
      while (!!(this.toNumber(this.stage.vars.phase) === 3)) {
        this.sprites["Acceleration"].createClone();
        yield* this.wait(0.9);
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 3)) {
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 4)) {
        this.sprites["ReturnBullet"].createClone();
        this.sprites["ReturnBullet2"].createClone();
        this.sprites["ReturnBullet3"].createClone();
        yield* this.wait(0.075);
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 4)) {
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 4.5)) {
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 5)) {
        this.sprites["Star2"].createClone();
        this.sprites["Star3"].createClone();
        this.sprites["Star4"].createClone();
        this.sprites["Star5"].createClone();
        yield* this.wait(0.2);
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 5)) {
        yield;
      }
      yield* this.wait(0.5);
      while (!!(this.toNumber(this.stage.vars.phase) === 6)) {
        this.sprites["TrackerV2"].createClone();
        yield* this.wait(0.9);
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 6)) {
        yield;
      }
      yield;
    }
  }

  *whenbackdropswitchesto7() {
    while (true) {
      while (
        !(
          this.compare(this.stage.vars.phase, 2) < 0 ||
          this.toNumber(this.stage.vars.phase) === 4 ||
          this.toNumber(this.stage.vars.phase) === 4.5 ||
          this.toNumber(this.stage.vars.phase) === 5
        )
      ) {
        this.sprites["Bullet"].createClone();
        yield* this.wait(0.2);
        yield;
      }
      yield;
    }
  }

  *whenbackdropswitchesto8() {
    while (!(this.compare(1, this.stage.vars.bossHealth) > 0)) {
      while (!(this.toNumber(this.stage.vars.phase) === 4)) {
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 4)) {
        this.effects.color += 25;
        yield;
      }
      this.effects.color = 0;
      yield;
    }
  }

  *whenbackdropswitchesto9() {
    while (!(this.compare(1, this.stage.vars.bossHealth) > 0)) {
      while (!(this.toNumber(this.stage.vars.phase) === 5)) {
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.phase) === 5)) {
        this.sprites["Bullet2"].createClone();
        yield* this.wait(0.2);
        yield;
      }
      yield;
    }
  }

  *whenbackdropswitchesto10() {
    this.audioEffects.volume = 20;
    while (!(this.compare(1, this.stage.vars.bossHealth) > 0)) {
      while (!(this.toNumber(this.stage.vars.phase) === 4)) {
        if (
          this.touching(this.sprites["Crystal"].andClones()) ||
          this.touching(this.sprites["Crystal2"].andClones()) ||
          this.touching(this.sprites["Crystal3"].andClones()) ||
          this.touching(this.sprites["Crystal4"].andClones()) ||
          this.touching(this.sprites["Crystal5"].andClones()) ||
          this.touching(this.sprites["Crystal6"].andClones())
        ) {
          yield* this.startSound("Pop");
          this.stage.vars.bossHealth--;
        }
        yield;
      }
      yield;
    }
  }

  *whenbackdropswitchesto11() {
    yield* this.wait(0.1);
    while (!(this.compare(1, this.stage.vars.bossHealth) > 0)) {
      yield;
    }
    yield* this.startSound("Oops");
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenGreenFlagClicked7() {
    this.stage.vars.bossHealth = 1500;
    this.stage.watchers.bossHealth.visible = false;
    this.visible = false;
  }

  *whenGreenFlagClicked8() {}

  *whenbackdropswitchesto12() {
    this.visible = false;
    this.deleteThisClone();
  }
}
