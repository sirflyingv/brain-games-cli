install: # basic install
	npm ci

brain-games: 
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish: # dry publish
	npm publish --dry-run 

lint:
	npx eslint .