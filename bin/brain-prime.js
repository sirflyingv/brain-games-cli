#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameLogicPrime, rulesStr } from '../src/games/brain-prime-logic.js';

runGame(gameLogicPrime, rulesStr);
