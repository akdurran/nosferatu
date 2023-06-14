
// You can write more code here

/* START OF COMPILED CODE */

class Char extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "guapen", frame);

		this.setInteractive(new Phaser.Geom.Circle(104, 120, 104), Phaser.Geom.Circle.Contains);
		this.scaleX = 0.1;
		this.scaleY = 0.1;
		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.setCircle(64);

		// inputScript
		new ScriptNode(this);

		// left
		const left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

		// up
		const up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

		// right
		const right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		// down
		const down = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

		this.left = left;
		this.up = up;
		this.right = right;
		this.down = down;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Input.Keyboard.Key} */
	left;
	/** @type {Phaser.Input.Keyboard.Key} */
	up;
	/** @type {Phaser.Input.Keyboard.Key} */
	right;
	/** @type {Phaser.Input.Keyboard.Key} */
	down;

	/* START-USER-CODE */

	update()
	{
		if (this.up.isDown) {
			this.body.velocity.y = -100;
		}
		if (this.left.isDown) {
			this.body.velocity.x = -100;
		}
		if (this.right.isDown){
			this.body.velocity.x = 100;
		}
		if (this.down.isDown){
			this.body.velocity.y = 100;
		}
		if(this.up.isUp && this.left.isUp && this.right.isUp && this.down.isUp) {
			this.body.velocity.x = 0;
			this.body.velocity.y = 0;
	}
}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
