#!/bin/bash
export PATH=/home/colin/.nvm/versions/node/v22.7.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

cd /home/colin/stuff/tmbrug
echo "" >>tmbrug.log
date >>tmbrug.log
nvm run --lts tmbrug.js >>tmbrug.log 2>&1
