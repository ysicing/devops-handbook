#!/bin/bash

sed '/livereload/d' book.json
gitbook install
gitbook build
