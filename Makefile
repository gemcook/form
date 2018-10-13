start:
	NODE_PATH=$(shell which node) \
	NODE_ENV=development \
	BABEL_ENV=development \
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
	cp -r ./src/styles ./lib/styles
	cp ./flow-typed/index.js.flow ./lib/index.js.flow

build:
	yarn run build-storybook

publish:
	yarn publish --access public

gen-flow:
	flow gen-flow-files src/index.js --out-dir flow-typed

flow-server:
	flow server --file-watcher watchman --file-watcher-debug
