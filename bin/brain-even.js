#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateBrainEvenGameRoundData, rules } from '../src/games/brain-even-logic.js';

runGame(generateBrainEvenGameRoundData, rules);
