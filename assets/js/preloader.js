class Preloader extends Phaser.Scene{
    constructor() {
        super('bootGame');
    }
    preload(){
        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);
        this.load.on('progress',function (value){
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });
        this.load.on('complete',function (){
            progressBar.destroy();
            progressBox.destroy();
        })
    }
    create(){
        this.add.text(20,20,'Loading game...');
        this.scene.start('playGame');
    }
}