#!/usr/bin/env node

import runGame from '../src/index.js';
import {
  generateBrainProgressionGameRoundData,
  rules,
} from '../src/games/brain-progression-logic.js';

runGame(generateBrainProgressionGameRoundData, rules);
