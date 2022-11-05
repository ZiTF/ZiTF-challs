#! /bin/bash

docker build -t crackito Build
docker run -d -p 7777:22 crackito