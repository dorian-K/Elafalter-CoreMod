
function SpeedMod(mod: JsMod) {
    mod.setName("Speed");

    mod.registerFloatProperty("Multiplier", 1.5, 1, 3);

    mod.hook("?getSpeed@Player@@UEBAMXZ", (info) => {
        info.setReturnValue(0.1 * mod.getFloatProperty("Multiplier"));
    });
}

export default SpeedMod;