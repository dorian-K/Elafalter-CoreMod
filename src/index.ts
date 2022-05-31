import {
	Game,
	ModManager
} from './sdk'
import AutoClickerMod from './mods/AutoClicker';
import SpeedMod from './mods/Speed';
import JetpackMod from './mods/Jetpack';
import FullbrightMod from './mods/Fullbright';

ModManager.registerMod(SpeedMod);
ModManager.registerMod(JetpackMod);
ModManager.registerMod(AutoClickerMod);
ModManager.registerMod(FullbrightMod);