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

test:
	npm test

test-watch:
	npm test -- --watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8