
var enemies_global;

/* START OF COMPILED CODE */

class Play extends Phaser.Scene {

	constructor() {
		super("Play");

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sewers
		const sewers = this.add.tilemap("sewers");
		sewers.addTilesetImage("sewer_tileset", "sewer_tileset");

		// bottom_1
		sewers.createLayer("Bottom", ["sewer_tileset"], 0, 0);

		// player
		const player = new Char(this, 612, 418);
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

		// health
		const health = this.add.text(1091, 24, "", {});
		health.text = "Health: 0";

		// lists
		const enemies = [enemy_2, enemy_1, enemy];

		// collider
		const collider = this.physics.add.collider(player, enemies, this.enemyHit);

		this.player = player;
		this.health = health;
		this.sewers = sewers;
		this.collider = collider;
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	/** @type {Char} */
	player;
	/** @type {Phaser.GameObjects.Text} */
	health;
	/** @type {Phaser.Tilemaps.Tilemap} */
	sewers;
	/** @type {Phaser.Physics.Arcade.Collider} */
	collider;
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
		if(this.enemies.length > 0)
		{
			this.enemies.forEach(item => this.physics.moveToObject(item, this.player, 100));
		}
	}

	enemyHit()
	{
		this.enemies.forEach(item => item.destroy());
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
