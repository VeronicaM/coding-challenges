#!/usr/bin/env bash

#$FILES=`find . -type f \( -iname "*.js" -not -iname "*index.js" \)`
FILES=`find . -type f \( -iname "*.js" -not -iname "*index.js"  -not -iname "*utils.js"  -not -path "./node_modules/*" \)`

for file in $FILES
do 
  echo ${file}
  node ${file}
done