
// You can write more code here

/* START OF COMPILED CODE */

class charInput extends ScriptNode {

	constructor(parent) {
		super(parent);

		// up
		const up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

		// left
		const left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

		// right
		const right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		// down
		const down = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

		this.up = up;
		this.left = left;
		this.right = right;
		this.down = down;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Input.Keyboard.Key} */
	up;
	/** @type {Phaser.Input.Keyboard.Key} */
	left;
	/** @type {Phaser.Input.Keyboard.Key} */
	right;
	/** @type {Phaser.Input.Keyboard.Key} */
	down;

	/* START-USER-CODE */

	update(){

		if (this.up.isDown) {
			this.parent.body.velocity.y = -100;
		}
		if (this.left.isDown) {
			this.parent.body.velocity.x = -100;
		}
		if (this.right.isDown){
			this.parent.body.velocity.x = 100;
		}
		if (this.down.isDown){
			this.parent.body.velocity.y = 100;
		}
		if(this.up.isUp && this.left.isUp && this.right.isUp && this.down.isUp) {
			this.parent.body.velocity.x = 0;
			this.parent.body.velocity.y = 0;
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
