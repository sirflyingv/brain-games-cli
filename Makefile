install: # basic install
	npm ci

brain-games: 
	node bin/brain-games.js

publish: # dry publish
	npm publish --dry-run 

lint:
	npx eslint .