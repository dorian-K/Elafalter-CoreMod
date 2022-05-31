import { Game } from "../sdk";

function FlyMod(mod: JsMod) {
    mod.setName("Fly");

    let preCanFly = 0;
    let hasEnabled = false;

    mod.on("enable", () => {
        let lp = Game.getLocalPlayer();
        if (lp == null)
            return mod.setEnabled(false);

        preCanFly = lp.canFly;
        hasEnabled = true;
    });

    mod.on("tickWorld", (lp: LocalPlayer) => {
        if (hasEnabled)
            lp.canFly = 1;
    });

    mod.on("disable", () => {
        let lp = Game.getLocalPlayer();
        if (lp == null)
            return;
        lp.canFly = preCanFly;
        hasEnabled = false;
    });
}

export default FlyMod;