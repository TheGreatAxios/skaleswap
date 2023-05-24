#!/bin/bash

set -e

echo "Deploying on Europa"

EUROPA=""

if [[ $1 == "mainnet" ]]; then EUROPA="europa"; else EUROPA="europa-staging-v3"; fi

npx hardhat deploy --tags autoswapper --network $EUROPA
