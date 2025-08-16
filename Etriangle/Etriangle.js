/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Etriangle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ETriangle", "./Etriangle/costumes/ETriangle.svg", {
        x: 108.5,
        y: 109,
      }),
      new Costume("ETriangle2", "./Etriangle/costumes/ETriangle2.png", {
        x: 200,
        y: 195,
      }),
      new Costume("ETriangle3", "./Etriangle/costumes/ETriangle3.svg", {
        x: 101.35607000000002,
        y: 100.81818490861616,
      }),
    ];

    this.sounds = [
      new Sound("Laser2", "./Etriangle/sounds/Laser2.wav"),
      new Sound("Laser1", "./Etriangle/sounds/Laser1.wav"),
      new Sound("Teleport2", "./Etriangle/sounds/Teleport2.wav"),
      new Sound("Coin", "./Etriangle/sounds/Coin.wav"),
      new Sound("Glass Breaking", "./Etriangle/sounds/Glass Breaking.wav"),
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked10),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked11),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked12),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked13),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked14),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked15),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked16),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked17),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked18),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked19),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked20),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked21),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked22),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked23),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked24),
    ];

    this.audioEffects.volume = 50;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    this.visible = true;
    this.direction = 90;
    this.goto(0, 0);
    yield* this.wait(3);
    while (true) {
      this.direction += 5;
      yield;
    }
  }

  *whenbackdropswitchesto() {}

  *whenbackdropswitchesto2() {}

  *whenbackdropswitchesto3() {}

  *whenbackdropswitchesto4() {}

  *whenGreenFlagClicked2() {
    while (true) {
      while (!!this.keyPressed("w")) {
        if (this.keyPressed("w")) {
          this.y += this.toNumber(this.stage.vars.characterspeed);
        }
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      while (!!this.keyPressed("a")) {
        if (this.keyPressed("a")) {
          this.x += 0 - this.toNumber(this.stage.vars.characterspeed);
        }
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      while (!!this.keyPressed("s")) {
        if (this.keyPressed("s")) {
          this.y += 0 - this.toNumber(this.stage.vars.characterspeed);
        }
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      while (!!this.keyPressed("d")) {
        if (this.keyPressed("d")) {
          this.x += this.toNumber(this.stage.vars.characterspeed);
        }
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    yield* this.wait(1);
    while (!(this.compare(1, this.stage.vars.health) > 0)) {
      yield;
    }
    this.visible = false;
    this.stage.costume = "Game Over";
    /* TODO: Implement stop all */ null;
  }

  *whenGreenFlagClicked7() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    while (true) {
      this.effects.brightness = this.toNumber(this.stage.vars.health) - 85;
      yield;
    }
  }

  *whenGreenFlagClicked8() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    yield* this.wait(1);
    if (this.toNumber(this.stage.vars.characterbullettype) === 1) {
      while (true) {
        while (!!this.mouse.down) {
          if (this.mouse.down) {
            this.sprites["Crystal"].createClone();
            yield* this.wait(0.1);
          }
          yield;
        }
        yield;
      }
    }
    if (this.toNumber(this.stage.vars.characterbullettype) === 2) {
      while (true) {
        while (!!this.mouse.down) {
          if (this.mouse.down) {
            this.sprites["Crystal"].createClone();
            this.sprites["Crystal4"].createClone();
            this.sprites["Crystal5"].createClone();
            yield* this.wait(0.1);
          }
          yield;
        }
        yield;
      }
    }
  }

  *whenGreenFlagClicked9() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    yield* this.wait(1);
    if (this.toNumber(this.stage.vars.characterbullettype) === 1) {
      while (true) {
        while (!!this.mouse.down) {
          if (this.mouse.down) {
            this.sprites["Crystal3"].createClone();
            this.sprites["Crystal2"].createClone();
            yield* this.wait(0.3);
          }
          yield;
        }
        yield;
      }
    }
    if (this.toNumber(this.stage.vars.characterbullettype) === 2) {
      while (true) {
        while (!!this.mouse.down) {
          if (this.mouse.down) {
            this.sprites["Crystal3"].createClone();
            this.sprites["Crystal2"].createClone();
            if (this.toNumber(this.stage.vars.focusfireangle) === 0) {
              this.stage.vars.characterspeed = 3;
            } else {
              this.stage.vars.characterspeed = 1;
            }
            yield* this.wait(0.2);
          }
          yield;
        }
        this.stage.vars.characterspeed = 5;
        yield;
      }
    }
  }

  *whenGreenFlagClicked10() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
  }

  *whenGreenFlagClicked11() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    if (this.toNumber(this.stage.vars.characterability) === 1) {
      while (true) {
        while (!this.keyPressed("space")) {
          yield;
        }
        this.goto(this.mouse.x, this.mouse.y);
        yield* this.startSound("Teleport2");
        this.stage.watchers.teleport.visible = true;
        this.stage.vars.teleport = 10;
        for (let i = 0; i < 10; i++) {
          yield* this.wait(1);
          this.stage.vars.teleport--;
          yield;
        }
        this.stage.watchers.teleport.visible = false;
        yield* this.startSound("Coin");
        yield;
      }
    }
    if (this.toNumber(this.stage.vars.characterability) === 2) {
      while (true) {
        while (!this.keyPressed("space")) {
          yield;
        }
        yield* this.startSound("Teleport2");
        this.stage.watchers.teleport.visible = true;
        this.stage.vars.teleport = 20;
        this.stage.vars.focusfireangle = 5;
        for (let i = 0; i < 10; i++) {
          yield* this.wait(1);
          this.stage.vars.teleport--;
          yield;
        }
        yield* this.startSound("Teleport2");
        this.stage.vars.focusfireangle = 0;
        for (let i = 0; i < 10; i++) {
          yield* this.wait(1);
          this.stage.vars.teleport--;
          yield;
        }
        this.stage.watchers.teleport.visible = false;
        yield* this.startSound("Coin");
        yield;
      }
    }
    if (this.toNumber(this.stage.vars.characterability) === 3) {
      while (true) {
        while (!this.keyPressed("space")) {
          yield;
        }
        yield* this.startSound("Teleport2");
        this.stage.watchers.teleport.visible = true;
        this.stage.vars.teleport = 2;
        if (this.toNumber(this.stage.vars.followcursor) === 1) {
          this.stage.vars.followcursor = 0;
        } else {
          this.stage.vars.followcursor = 1;
        }
        for (let i = 0; i < 2; i++) {
          yield* this.wait(1);
          this.stage.vars.teleport--;
          yield;
        }
        this.stage.watchers.teleport.visible = false;
        yield* this.startSound("Coin");
        yield;
      }
    }
  }

  *whenGreenFlagClicked12() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    this.stage.vars.health = this.stage.vars.characterhealth;
    this.audioEffects.volume = 50;
    yield* this.wait(1);
    while (true) {
      if (
        this.touching(Color.rgb(255, 255, 255)) ||
        this.touching(this.sprites["Star"].andClones()) ||
        this.touching(this.sprites["Whitesquare"].andClones()) ||
        this.touching(this.sprites["Boss2Mask"].andClones())
      ) {
        this.stage.vars.health--;
        yield* this.startSound("Laser2");
      }
      yield;
    }
  }

  *whenGreenFlagClicked13() {
    this.visible = false;
    this.stage.watchers.teleport.visible = false;
  }

  *whenGreenFlagClicked14() {
    while (true) {
      this.stage.vars.xPosition = this.x;
      yield;
    }
  }

  *whenGreenFlagClicked15() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    while (!(this.compare(10, this.stage.vars.health) > 0)) {
      yield;
    }
    yield* this.startSound("Glass Breaking");
  }

  *whenGreenFlagClicked16() {}

  *whenGreenFlagClicked17() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      if (this.toNumber(this.stage.vars.characterstats) === 1) {
        this.costume = "ETriangle";
        this.stage.vars.characterspeed = 5;
        this.stage.vars.characterbulletspeed = 10;
        this.stage.vars.characterbullettype = 1;
        this.stage.vars.characterability = 1;
        this.stage.vars.characterhealth = 100;
      }
      if (this.toNumber(this.stage.vars.characterstats) === 2) {
        this.costume = "ETriangle2";
        this.stage.vars.characterspeed = 5;
        this.stage.vars.characterbulletspeed = 7;
        this.stage.vars.characterbullettype = 2;
        this.stage.vars.characterability = 2;
        this.stage.vars.characterhealth = 120;
      }
      if (this.toNumber(this.stage.vars.characterstats) === 3) {
        this.costume = "ETriangle3";
        this.stage.vars.characterspeed = 6;
        this.stage.vars.characterbulletspeed = 20;
        this.stage.vars.characterbullettype = 3;
        this.stage.vars.characterability = 3;
        this.stage.vars.characterhealth = 80;
      }
      yield;
    }
  }

  *whenGreenFlagClicked18() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    yield* this.wait(3);
    while (true) {
      this.effects.color += 10;
      yield;
    }
  }

  *whenGreenFlagClicked19() {}

  *whenGreenFlagClicked20() {
    while (true) {
      while (!(this.toNumber(this.stage.vars.followcursor) === 1)) {
        yield;
      }
      yield* this.glide(0.2, this.mouse.x, this.mouse.y);
      while (!!(this.toNumber(this.stage.vars.followcursor) === 1)) {
        this.goto(this.mouse.x, this.mouse.y);
        yield;
      }
      yield;
    }
  }

  *whenbackdropswitchesto5() {
    if (this.toNumber(this.stage.vars.characterbullettype) === 3) {
      yield* this.wait(4.5);
      while (!(this.toNumber(this.stage.vars.bossHealth) === 0)) {
        this.sprites["Crystal6"].createClone();
        yield* this.wait(0.1);
        yield;
      }
    }
  }

  *whenGreenFlagClicked21() {
    this.stage.vars.focusfireangle = 0;
    this.stage.vars.followcursor = 0;
    this.stage.vars.teleport = 0;
  }

  *whenbackdropswitchesto6() {
    if (this.toNumber(this.stage.vars.characterbullettype) === 3) {
      yield* this.wait(3);
      while (!(this.toNumber(this.stage.vars.bossHealth) === 0)) {
        this.sprites["Crystal7"].createClone();
        yield* this.wait(0.1);
        yield;
      }
    }
  }

  *whenGreenFlagClicked22() {
    yield* this.wait(0.001);
    while (!!(this.stage.costume.name === "Menu")) {
      yield;
    }
    yield* this.wait(1);
    while (true) {
      if (this.touching("edge")) {
        this.stage.vars.health--;
        yield* this.startSound("Laser2");
        yield* this.wait(0.2);
      }
      yield;
    }
  }

  *whenGreenFlagClicked23() {
    while (!this.touching(this.sprites["Portal"].andClones())) {
      yield;
    }
    this.stage.watchers.teleport.visible = false;
    this.stopAllSounds();
  }

  *whenbackdropswitchesto7() {
    this.visible = false;
    yield* this.wait(0.1);
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenbackdropswitchesto8() {
    while (!this.touching(this.sprites["Portal"].andClones())) {
      yield;
    }
    this.stage.watchers.HighScoreWrath.visible = true;
    this.broadcast("Wrath");
  }

  *whenbackdropswitchesto9() {
    while (!this.touching(this.sprites["Portal"].andClones())) {
      yield;
    }
    this.stage.watchers.HighScoreGreed.visible = true;
    this.broadcast("Greed");
  }

  *whenbackdropswitchesto10() {
    while (!this.touching(this.sprites["Portal"].andClones())) {
      yield;
    }
    this.stage.watchers.HighScorePride.visible = true;
    this.broadcast("Pride");
  }

  *whenbackdropswitchesto11() {
    while (true) {
      this.stage.vars.timer++;
      yield* this.wait(1);
      yield;
    }
  }

  *whenbackdropswitchesto12() {
    while (true) {
      this.stage.vars.timer++;
      yield* this.wait(1);
      yield;
    }
  }

  *whenbackdropswitchesto13() {
    while (true) {
      this.stage.vars.timer++;
      yield* this.wait(1);
      yield;
    }
  }

  *whenGreenFlagClicked24() {
    while (!this.touching(this.sprites["Portal"].andClones())) {
      yield;
    }
    this.stage.vars.healthScore = this.toNumber(this.stage.vars.health) * 10;
    this.stage.vars.timeScore = 1000 - this.toNumber(this.stage.vars.timer);
    if (this.toNumber(this.stage.vars.characterstats) === 3) {
      this.stage.vars.totalScore =
        (this.toNumber(this.stage.vars.healthScore) +
          this.toNumber(this.stage.vars.timeScore)) /
        2;
    } else {
      this.stage.vars.totalScore =
        this.toNumber(this.stage.vars.healthScore) +
        this.toNumber(this.stage.vars.timeScore);
    }
  }
}
