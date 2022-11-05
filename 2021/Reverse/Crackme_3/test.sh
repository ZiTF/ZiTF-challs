#! /bin/bash

# Check that the password gives the flag
res=`echo -n -e "\x93\xb5\xa9\x5d\x6c\x93\x57\x1b" | Chall/crackme_3 | grep ZiTF{015e370c1a8401839f75725ea2298fbb} `

if [  -z "$res" ]; then 
	echo "Incorrect pass."
        exit 1 	
else
	echo "It works !" 
fi
