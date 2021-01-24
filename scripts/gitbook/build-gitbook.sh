#!/bin/bash

sed -i '/livereload/d' book.json
gitbook install
gitbook build
