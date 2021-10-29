
class PlayScene extends Phaser.Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  preload() {
    
    const BASE_URL = location.hostname === 'localhost'
    ? '/'
    : '/different-beats/';
    
    this.load.spritesheet(
        'lips',
        BASE_URL + 'js/game/assets/lips.png',
        {
            frameWidth: 500,
            frameHeight: 270
        }
      );
  }

  create () {
    const lips = this.physics.add.sprite(400, 200, 'lips', 0)
    lips.anims.create({
      key: 'default',
      frames: lips.anims.generateFrameNumbers('lips'),
      frameRate: 12,
      repeat: -1,
      yoyo: true
    })
    lips.setBlendMode(1);
    lips.play( 'default' )
    lips.setCollideWorldBounds(true)
    lips.body.onWorldBounds = true // enable worldbounds collision event
    lips.setBounce(1)
    lips.setVelocity(200, -100)

    window.lips = lips

    window.foo = this
  }

  update() {
  }
}


window.game = new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    scene: [PlayScene],
    render: {
      pixelArt: true,
      transparent: true
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    }
  })