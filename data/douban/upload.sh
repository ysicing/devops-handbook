#!/bin/bash

cat data/douban/movie.csv | grep https | awk -F, '{print $4}' | while read line; do
  # Add your code here
  filename=$(basename "$line")
  echo $filename
  mc ls cos2/img/douban/$filename | grep "$filename" && echo "exist $filename" || (
    wget $line -O /tmp/x-$filename
    mc cp /tmp/x-$filename cos2/img/douban/$filename
    rm -rf /tmp/x-$filename
  )
done

