#!/bin/bash

BASEDIR=$(dirname "${0}")
VERSION=$(node -p "require('${BASEDIR}/../package.json').version")

sed -i -E "s/index\.puml(\?v[0-9]\.[0-9]\.[0-9])?/index.puml?v${VERSION}/" ${BASEDIR}/../README.md
