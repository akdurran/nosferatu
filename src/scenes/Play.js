
// You can write more code here

/* START OF COMPILED CODE */

class Play extends Phaser.Scene {

	constructor() {
		super("Play");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sewers
		const sewers = this.add.tilemap("sewers");
		sewers.addTilesetImage("sewer_tileset", "sewer_tileset");

		// bottom_1
		sewers.createLayer("Bottom", ["sewer_tileset"], 0, 0);

		// Player
		const player = new Char(this, 612, 407);
		this.add.existing(player);

		// enemy
		const enemy = this.physics.add.image(881, 452, "guapen");
		enemy.scaleX = 0.05;
		enemy.scaleY = 0.05;
		enemy.body.setSize(208, 240, false);

		// enemy_1
		const enemy_1 = this.physics.add.image(1077, 126, "guapen");
		enemy_1.scaleX = 0.05;
		enemy_1.scaleY = 0.05;
		enemy_1.body.setSize(208, 240, false);

		// enemy_2
		const enemy_2 = this.physics.add.image(1158, 152, "guapen");
		enemy_2.scaleX = 0.05;
		enemy_2.scaleY = 0.05;
		enemy_2.body.setSize(208, 240, false);

		// lists
		const enemies = [enemy_2, enemy_1, enemy];

		this.player = player;
		this.enemy = enemy;
		this.enemy_1 = enemy_1;
		this.enemy_2 = enemy_2;
		this.sewers = sewers;
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	/** @type {Char} */
	player;
	/** @type {Phaser.Physics.Arcade.Image} */
	enemy;
	/** @type {Phaser.Physics.Arcade.Image} */
	enemy_1;
	/** @type {Phaser.Physics.Arcade.Image} */
	enemy_2;
	/** @type {Phaser.Tilemaps.Tilemap} */
	sewers;
	/** @type {Phaser.Physics.Arcade.Image[]} */
	enemies;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.sound.play("sound");
	}
	update() {
		this.player.update();
		this.enemies.forEach(item => this.physics.moveToObject(item, this.player, 100))
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
