#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameLogicProgression, rules } from '../src/games/brain-progression-logic.js';

runGame(gameLogicProgression, rules);
