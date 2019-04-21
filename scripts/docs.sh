#!/bin/bash

BASEDIR=$(dirname "${0}")

cat ${BASEDIR}/links.puml >> ${BASEDIR}/../docs/index.puml

perl -0777 -i~ -pe "s/\@enduml\r?\n\@startuml//" ${BASEDIR}/../docs/index.puml

perl -0777 -i~ -pe "s/class Empty \{\r?\n\}//" ${BASEDIR}/../docs/index.puml

rm ${BASEDIR}/../docs/index.puml~
