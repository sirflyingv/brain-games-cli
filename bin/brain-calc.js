#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameLogicCalc, rulesStr } from '../src/games/brain-calc-logic.js';

runGame(gameLogicCalc, rulesStr);
