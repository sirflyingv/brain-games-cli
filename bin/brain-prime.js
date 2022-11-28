#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateBrainPrimeGameRoundData, rules } from '../src/games/brain-prime-logic.js';

runGame(generateBrainPrimeGameRoundData, rules);
