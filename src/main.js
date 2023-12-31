/* Credits for assets:
https://opengameart.org/content/dark-gothic-haunted-masquerade
https://chasersgaming.itch.io/rpg-asset-character-poor-folk-1-nes
https://github.com/mapeditor/tiled/tree/master/examples
https://github.com/PhaserEditor2D/starter-template-basic-javascript/tree/master/assets
*/


var char_global;
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics:
		{
			default: 'arcade'
		}
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("Menu", Menu);
	game.scene.add("Play", Play);
	game.scene.add("Victory", Victory);
	game.scene.add("GameOver", GameOver);
	game.scene.add("Boot", Boot, true);
	
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}
