#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameLogicGCD, rules } from '../src/games/brain-gcd-logic.js';

runGame(gameLogicGCD, rules);
