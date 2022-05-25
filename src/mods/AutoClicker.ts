
function AutoClickerMod(mod: JsMod) {
    mod.setName("AutoClicker");

    mod.registerIntProperty("CPS", 6, 1, 20);

    let t = 0;
    mod.on("tickWorld", (lp: LocalPlayer) => {
        t++;
        const cps = mod.getIntProperty("CPS");
        const tpc = 20 / cps;
        if (t > tpc) {
            t -= tpc;
            // Click
            lp.swing();
            const lvl = lp.getLevel();
            const hitResult = lvl.getHitResult();
            if (hitResult.isHit()) {
                const hitEnt = hitResult.getEntity();
                if (hitEnt != null)
                    lp.gameMode.attack(hitEnt);
            }

        }
        if (t > 20)
            t = 20;
    });
}

export default AutoClickerMod;