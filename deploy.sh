#!/bin/sh

# Variables
remote_user="cpiy9257"
remote_host="109.234.160.108"
local_dir="dist/"
remote_dir="/home/cpiy9257/avariko-athletics.com"

yarn build
yarn generate

# Synchronisation des dossiers avec rsync
rsync -avz --exclude='.DS_Store' -e "ssh" "$local_dir" "$remote_user@$remote_host:$remote_dir" --delete

echo "Synchronisation terminée."
