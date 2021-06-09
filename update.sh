#!/bin/bash
echo -n 'Message: ';
read;

git add .
git commit -m "${REPLY}"
git push