class KillauraMod {

    ref: JsMod;

    constructor(mod: JsMod) {
        mod.setName("Killaura");

        mod.on("init", this.onInit);
        mod.on("enable", this.onEnable);
        mod.on("disable", this.onDisable);

        this.ref = mod;
    }

    onInit() {

    }

    onEnable() {

    }

    onDisable() {

    }
}

function attackSomeEntity() {

    let lp = Game.getLocalPlayer();
    let allActors = Game.getAllActors();
    for (let i = 0; i < allActors.length; i++) {
        let act = allActors[i];
        if (act.entityRuntimeId == lp.entityRuntimeId) continue;

        lp.gameMode.attack(act);
        break;
    }
}

export default KillauraMod;