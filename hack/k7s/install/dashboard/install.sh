#!/bin/bash

[ -f "../stdlib.sh" ] && (
    source ../stdlib.sh
) || (
    curl --fail --silent --location -o /tmp/stdlib.sh https://raw.githubusercontent.com/ysicing/func/master/func.sh || {
	exit 1
    }
    source /tmp/stdlib.sh
    rm /tmp/stdlib.sh
)

progress "Installing Dashboard"

run kubectl apply -f dashboard/v1.10.1/deploy.yml

run kubectl describe secret -n kube-system $(kubectl get secrets -n kube-system | grep dashboard-admin | cut -f1 -d ' ') | grep -E '^token'
