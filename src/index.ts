import {
	Game,
	ModManager
} from './sdk'
import AutoClickerMod from './mods/AutoClicker';
import SpeedMod from './mods/Speed';
import JetpackMod from './mods/Jetpack';

ModManager.registerMod(SpeedMod);
ModManager.registerMod(JetpackMod);
ModManager.registerMod(AutoClickerMod);