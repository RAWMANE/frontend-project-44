install : 
	npm ci
brain-games: 
	node src/cli.js
publish : 
	npm publish --dry-run
lint :
	npx eslint .
fix :
	npx eslint . --fix
brain-even :
	node src/games/even.js
brain-calc :
	node  src/games/calc.js
brain-gcd :
	node src/games/gcd.js
brain-progression :
	node src/games/progression.js
brain-prime :
	node src/games/prime.js