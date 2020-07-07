class Card extends Phaser.GameObjects.Sprite {
  constructor(scene, value){
    super(scene, 0, 0, 'card')
    this.scene = scene
    this.value = value
    this.setOrigin(0,0)
    this.scene.add.existing(this) // непосредствнный вывод на сцену
    this.setInteractive()
    this.opened = false
    //this.on('pointerdown', this.open, this)
  
  }

  open() {
    this.opened = true
    this.setTexture('card' + this.value)
  }

  close() {
    this.opened = false
    this.setTexture('card')
  }
}