install: # basic install
	npm ci

brain-games: 
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-calc:
	node bin/brain-prime.js

publish: # dry publish
	npm publish --dry-run 

lint:
	npx eslint .