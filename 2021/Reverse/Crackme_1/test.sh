#! /bin/bash

res=`strings -n 10 Chall/crackme | grep ZiTF{afea67081cc63a047734dc1788b4e533}`

if [  -z "$res" ];then 
	echo "Binary not containing the flag."
        exit 1
else
	echo "It works !"
fi
