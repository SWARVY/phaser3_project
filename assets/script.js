const config = {
    type: Phaser.AUTO,
    width: 500,
    height: 400,
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.spritesheet("knight", "assets/sprite/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png", {
        frameHeight : 80,
        frameWidth : 120
    });
}

function create() {
    this.knight = this.add.sprite(config.width / 2 - 50, config.height / 2, "knight");
    this.anims.create({
        key: "knight_idle",
        frames: this.anims.generateFrameNumbers("knight"),
        frameRate: 20,
        repeat: -1
    });
}

function update() {
    
}
