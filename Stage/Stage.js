/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Thumbnail", "./Stage/costumes/Thumbnail.svg", {
        x: 276.36683108041666,
        y: 205.8480903571886,
      }),
      new Costume("Wrath Backdrop", "./Stage/costumes/Wrath Backdrop.svg", {
        x: 871.5478705213508,
        y: 297.47648893904073,
      }),
      new Costume("Game Over", "./Stage/costumes/Game Over.svg", {
        x: 244.5,
        y: 182.5,
      }),
      new Costume("Victory Screen", "./Stage/costumes/Victory Screen.svg", {
        x: 243.944387755102,
        y: 180.2775510204081,
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("Menu", "./Stage/costumes/Menu.svg", { x: 284.5, y: 212.5 }),
      new Costume("Greed Background", "./Stage/costumes/Greed Background.svg", {
        x: 258.25,
        y: 198.25000000000003,
      }),
      new Costume("Pride Background", "./Stage/costumes/Pride Background.svg", {
        x: 258.25,
        y: 198.25000000000003,
      }),
      new Costume("Sloth Background", "./Stage/costumes/Sloth Background.svg", {
        x: 258.25,
        y: 198.25000000000003,
      }),
    ];

    this.sounds = [
      new Sound(
        "03-IMAGE-MATERIAL-2",
        "./Stage/sounds/03-IMAGE-MATERIAL-2.mp3"
      ),
      new Sound("audio", "./Stage/sounds/audio.mp3"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ShapeSelect" },
        this.whenIReceiveShapeselect
      ),
    ];

    this.audioEffects.volume = 10;

    this.vars.phase = 0;
    this.vars.xPosition = -90;
    this.vars.time = 2;
    this.vars.tracer = 0;
    this.vars.tracerX = -97;
    this.vars.tracerY = -105;
    this.vars.wallDirection = -240;
    this.vars.wallOrientation = 90;
    this.vars.wallY = -160;
    this.vars.tracker = 0;
    this.vars.health = 37;
    this.vars.bossHealth = 1500;
    this.vars.teleport = 0;
    this.vars.natemode = 0;
    this.vars.prev = 3;
    this.vars.apple = 3;
    this.vars.rail = 0;
    this.vars.rail2 = 0;
    this.vars.rail3 = 0;
    this.vars.rail4 = 0;
    this.vars.x = -48.82637724175606;
    this.vars.y = -179.36060111327595;
    this.vars.dir = 154.29004621918875;
    this.vars.x2 = -32.27961521994016;
    this.vars.y2 = -177.02233494134708;
    this.vars.dir2 = -143.61564818416412;
    this.vars.x3 = -240;
    this.vars.y3 = -136.637745712943;
    this.vars.dir3 = -88.95837332399003;
    this.vars.x4 = 240;
    this.vars.y4 = -137.07014406461138;
    this.vars.dir4 = 89.01223960036019;
    this.vars.menuparticle = 1;
    this.vars.characterstats = 1;
    this.vars.characterbullettype = 1;
    this.vars.characterbulletspeed = 10;
    this.vars.characterspeed = 5;
    this.vars.characterability = 1;
    this.vars.characterhealth = 100;
    this.vars.focusfireangle = 0;
    this.vars.followcursor = 0;
    this.vars.selectedshape = 0;
    this.vars.angelaccel = 0.6500000000000004;
    this.vars.timeScore = 0;
    this.vars.healthScore = 0;
    this.vars.totalScore = 0;
    this.vars.HighScoreWrath = 1222;
    this.vars.HighScoreGreed = 1345;
    this.vars.HighScorePride = 0;
    this.vars.timer = 0;
    this.vars.page = 1;
    this.vars.mute = 0;
    this.vars.pendelum = 0;
    this.vars.upwards = 0;
    this.vars.flowerspeed = 3;
    this.vars.explodecounter = 0;
    this.vars.flowerlocationsx = [];
    this.vars.flowerlocationsy = [];
    this.vars.explodex = [];
    this.vars.explodey = [];

    this.watchers.bossHealth = new Watcher({
      label: "Boss Health",
      style: "normal",
      visible: false,
      value: () => this.vars.bossHealth,
      x: 411,
      y: 180,
    });
    this.watchers.teleport = new Watcher({
      label: "Teleport",
      style: "large",
      visible: false,
      value: () => this.vars.teleport,
      x: 670,
      y: 180,
    });
    this.watchers.characterstats = new Watcher({
      label: "CharacterStats",
      style: "slider",
      visible: false,
      value: () => this.vars.characterstats,
      setValue: (value) => {
        this.vars.characterstats = value;
      },
      step: 1,
      min: 1,
      max: 3,
      x: 406,
      y: -144,
    });
    this.watchers.timeScore = new Watcher({
      label: "Time Score",
      style: "normal",
      visible: false,
      value: () => this.vars.timeScore,
      x: 264,
      y: 4,
    });
    this.watchers.healthScore = new Watcher({
      label: "Health Score",
      style: "normal",
      visible: false,
      value: () => this.vars.healthScore,
      x: 413,
      y: 3,
    });
    this.watchers.totalScore = new Watcher({
      label: "Total Score",
      style: "normal",
      visible: false,
      value: () => this.vars.totalScore,
      x: 567,
      y: 4,
    });
    this.watchers.HighScoreWrath = new Watcher({
      label: "☁ High Score (Wrath)",
      style: "normal",
      visible: false,
      value: () => this.vars.HighScoreWrath,
      x: 388,
      y: -45,
    });
    this.watchers.HighScoreGreed = new Watcher({
      label: "☁ High Score (Greed)",
      style: "normal",
      visible: false,
      value: () => this.vars.HighScoreGreed,
      x: 386,
      y: -44,
    });
    this.watchers.HighScorePride = new Watcher({
      label: "☁ High Score (Pride)",
      style: "normal",
      visible: false,
      value: () => this.vars.HighScorePride,
      x: 389,
      y: -43,
    });
    this.watchers.mute = new Watcher({
      label: "Mute",
      style: "slider",
      visible: false,
      value: () => this.vars.mute,
      setValue: (value) => {
        this.vars.mute = value;
      },
      step: 1,
      min: 0,
      max: 1,
      x: 413,
      y: -124,
    });
  }

  *whenGreenFlagClicked() {
    this.vars.timer = 0;
    this.vars.selectedshape = 0;
    this.vars.healthScore = 0;
    this.vars.timeScore = 0;
    this.vars.totalScore = 0;
    this.watchers.HighScoreGreed.visible = false;
    this.watchers.HighScorePride.visible = false;
    this.watchers.HighScoreWrath.visible = false;
    this.watchers.healthScore.visible = false;
    this.watchers.timeScore.visible = false;
    this.watchers.totalScore.visible = false;
  }

  *whenGreenFlagClicked2() {}

  *whenGreenFlagClicked3() {
    this.costume = "Menu";
  }

  *whenbackdropswitchesto() {
    this.audioEffects.volume = 30;
    yield* this.wait(3);
    yield* this.startSound("03-IMAGE-MATERIAL-2");
  }

  *whenGreenFlagClicked4() {
    while (!!(this.costume.name === "Menu")) {
      yield* this.playSoundUntilDone("audio");
      yield;
    }
    this.watchers.mute.visible = false;
    while (true) {
      if (this.toNumber(this.vars.mute) === 1) {
        this.stopAllSounds();
        this.audioEffects.volume = 0;
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (!!(this.costume.name === "Menu")) {
      yield;
    }
    this.stopAllSounds();
  }

  *whenbackdropswitchesto2() {
    this.watchers.timeScore.visible = true;
    this.watchers.healthScore.visible = true;
    this.watchers.totalScore.visible = true;
  }

  *whenGreenFlagClicked6() {
    this.audioEffects.volume = 10;
    this.vars.mute = 0;
    this.watchers.mute.visible = true;
  }

  *whenGreenFlagClicked7() {
    while (true) {
      while (!(this.toNumber(this.vars.mute) === 1)) {
        yield;
      }
      this.audioEffects.volume = 0;
      while (!(this.toNumber(this.vars.mute) === 0)) {
        yield;
      }
      this.audioEffects.volume = 10;
      yield;
    }
  }

  *whenIReceiveShapeselect() {
    this.watchers.mute.visible = false;
  }
}
