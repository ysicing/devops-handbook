#!/bin/bash

set -e

dir=$(mktemp -d)
git clone git@code.devops.ysicing.net:ysicing/devops-handbook.git ${dir}
pushd ${dir}
    rm -rf config/_default/params.toml
    rm -rf config/_default/config.toml
    cp -a scripts/config/ysicing.me.toml config/_default/config.toml
    cp -a scripts/config/ysicing.me.params.toml config/_default/params.toml
    hugo --minify
    docker build -t ysicing/devops-handbook:ysicing.me -f scripts/caddy/ysicing.me/Dockerfile .
    docker push ysicing/devops-handbook:ysicing.me
    docker tag ysicing/devops-handbook:ysicing.me ghcr.io/ysicing/devops-handbook:ysicing.me
    docker push ghcr.io/ysicing/devops-handbook:ysicing.me
    git checkout .
    rm -rf public
    rm -rf resources
    rm -rf config/_default/params.toml
    rm -rf config/_default/config.toml
    cp -a scripts/config/blog.ysicing.net.params.toml config/_default/params.toml
    cp -a scripts/config/blog.ysicing.net.toml config/_default/config.toml
    hugo --minify
    docker build -t ysicing/devops-handbook:blog.ysicing.net -f scripts/caddy/blog.ysicing.net/Dockerfile .
    docker push ysicing/devops-handbook:blog.ysicing.net
    docker tag ysicing/devops-handbook:blog.ysicing.net ghcr.io/ysicing/devops-handbook:blog.ysicing.net
    docker push ghcr.io/ysicing/devops-handbook:blog.ysicing.net
    git checkout .
    rm -rf public
    rm -rf resources
    docker build -t ysicing/devops-handbook:sh.ysicing.me -f scripts/caddy/sh.ysicing.me/Dockerfile .
    docker push ysicing/devops-handbook:sh.ysicing.me
    docker tag ysicing/devops-handbook:sh.ysicing.me ghcr.io/ysicing/devops-handbook:sh.ysicing.me
    docker push ghcr.io/ysicing/devops-handbook:sh.ysicing.me
popd

rm -rf ${dir}