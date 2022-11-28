#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateBrainGCDGameRoundData, rules } from '../src/games/brain-gcd-logic.js';

runGame(generateBrainGCDGameRoundData, rules);
