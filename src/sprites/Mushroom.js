import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0)
    this.scale.setTo(0.4, 0.4);
  }

  update () {
    this.x -= 5
    if(this.x < this.width*-1 )
        this.destroy();

  }
}
