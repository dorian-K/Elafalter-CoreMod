function AutoSprintMod(mod: JsMod) {
    mod.setName("AutoSprint");

    mod.on("tickWorld", (lp: LocalPlayer) => {
        lp.setSprinting(true);
    });
}

export default AutoSprintMod;