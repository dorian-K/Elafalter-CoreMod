function AutoSprintMod(mod: JsMod) {
    mod.setName("AutoSprint");

    mod.on("tickWorld", (lp: LocalPlayer) => {
        try {
            lp.setSprinting(true);
        } catch (e) {

        }

    });
}

export default AutoSprintMod;