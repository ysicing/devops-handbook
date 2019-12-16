#!/bin/bash

curl -X PATCH \
  -H "content-type: application/strategic-merge-patch+json" \
  -H "Authorization:Bearer $1" \
  -d '{"spec":{"template":{"spec":{"containers":[{"name":"ysicing","image":"'"${$3}"'"}]}}}}' \
  "$2/apis/apps/v1/namespaces/default/deployments/web-ysicing"