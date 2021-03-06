import Socket from "/js/socket.js";

export default class Stats {
	constructor(stats) {
		this.castStats(stats);
	}

	statsChanged(stats, updateHUD) {
		this.speed += stats.speed;
		this.range += stats.range;
		this.shakeRate = 0.0005 * this.range;
		if (updateHUD) this.updateHud();
	}

	castStats(stats) {
		this.speed = stats.speed;
		this.speedNormalizer = 0.7;
		this.range = stats.range;
		this.shakeRate = 0.001 * this.range;
		this.explosionTime = 3000;
		this.hasHUD = false;
	}

	buildHUD(scene) {
		this.hasHUD = true;
		this.velocityHUD = scene.add
			.bitmapText(30, 30, "font", `Velocidad: ${this.speed}`, 20)
			.setDisplayOrigin(0, 0)
			.setAlpha(0.8);
		this.rangeHUD = scene.add
			.bitmapText(30, 60, "font", `Rango de bomba: ${this.range}`, 20)
			.setDisplayOrigin(0, 0)
			.setAlpha(0.8);
	}

	updateHud() {
		this.velocityHUD.setText(`Velocidad: ${this.speed}`);
		this.rangeHUD.setText(`Rango de bomba: ${this.range}`);
	}
}
