
function JetpackMod(mod: JsMod) {
    mod.setName("Jetpack");

    mod.on("tickWorld", (lp: LocalPlayer) => {
        const view = lp.viewAngles;
        const yaw = (view.y + 90) * (Math.PI / 180);
        const cY = Math.cos(yaw), sY = Math.sin(yaw);
        const pitch = -view.x * (Math.PI / 180);
        const cP = Math.cos(pitch), sP = Math.sin(pitch);

        lp.lerpMotion(new Vec3(cY * cP, sP, sY * cP));
    });
}

export default JetpackMod;