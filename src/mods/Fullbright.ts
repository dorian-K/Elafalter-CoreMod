function FullbrightMod(mod: JsMod) {
    mod.setName("Fullbright");

    mod.registerFloatProperty("Brightness", 20, 0, 20);

    mod.hook("?getGamma@Options@@MEAAMXZ", (info) => {
        info.setReturnValue(mod.getFloatProperty("Brightness"));
    });
}

export default FullbrightMod;