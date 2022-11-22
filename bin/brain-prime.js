#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameLogicPrime, rules } from '../src/games/brain-prime-logic.js';

runGame(gameLogicPrime, rules);
