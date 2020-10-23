let gameSettings = {
    playerSpeed:200
}
let config = {
    width: 1280,
    height: 720,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    autoRound: false,
    backgroundColor: 0x000000,
    scene: [Preloader],
    pixelArt: true,
}

let game = new Phaser.Game(config);



