#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameLogicCalc, rules } from '../src/games/brain-calc-logic.js';

runGame(gameLogicCalc, rules);
