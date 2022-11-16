class Slash extends Phaser.GameObjects.Sprite{
    constructor(scene){

        var x = scene.fox.x;
        var y = scene.fox.y;
        super(scene, x, y, "slash");
        scene.projectiles.add(this);
        
        this.play("slash_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.x = -250
    }
}