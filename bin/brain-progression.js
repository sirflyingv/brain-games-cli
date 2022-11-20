#!/usr/bin/env node

import runGame from '../src/index.js';
import {
  gameLogicProgression,
  rulesStr,
} from '../src/games/brain-progression-logic.js';

runGame(gameLogicProgression, rulesStr);
