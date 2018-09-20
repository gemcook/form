start:
	yarn run storybook

clean:
	rm -rf ./lib/

build-umd:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:umd

prepublish:
	$(MAKE) clean
	$(MAKE) build-umd
	cp ./flow-typed/index.flow.js ./lib/index.flow.js
	cp -r ./src/styles/ ./lib/styles/

build:
	yarn run build-storybook

publish:
	yarn publish --access public

flow-gen:
	yarn run flow gen-flow-files ./src/index.js --out-dir ./lib/
