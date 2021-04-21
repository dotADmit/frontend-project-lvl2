install:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node --experimental-json-modules bin/gendiff.js

gl:
	git log --oneline

lint:
	npx eslint .