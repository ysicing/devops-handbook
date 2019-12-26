#!/bin/bash

source ./stdlib.sh

info "prepare"
pushd prepare
./install.sh
popd

info "install k8s"
pushd install
./install.sh
popd
