#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateBrainCalcGameRoundData, rules } from '../src/games/brain-calc-logic.js';

runGame(generateBrainCalcGameRoundData, rules);
