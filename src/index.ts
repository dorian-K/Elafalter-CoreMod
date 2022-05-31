import {
	Game,
	ModManager
} from './sdk'
import AutoClickerMod from './mods/AutoClicker';
import SpeedMod from './mods/Speed';
import JetpackMod from './mods/Jetpack';
import FullbrightMod from './mods/Fullbright';
import AutoSprintMod from './mods/AutoSprint';

ModManager.registerMod(SpeedMod);
ModManager.registerMod(JetpackMod);
ModManager.registerMod(AutoClickerMod);
ModManager.registerMod(FullbrightMod);
ModManager.registerMod(AutoSprintMod);