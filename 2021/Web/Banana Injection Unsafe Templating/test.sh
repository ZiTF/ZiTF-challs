#! /bin/bash

test=$(curl -Is http://banana-injection.zitf.fr:5000/ | head -n 1)

if [[ "$test" == "HTTP/1.0 200 OK"* ]]; then
    echo "It works !"
    exit 0
else
    echo "Doesn't work"
    exit 1
fi
