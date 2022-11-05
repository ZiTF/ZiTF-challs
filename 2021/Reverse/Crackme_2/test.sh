#! /bin/bash

# Check that the password is in the strings
res=`strings -n 10 Chall/crackme_2 | grep ISI_SINGES`

if [  -z "$res" ]; then
	echo "Binary not containing the pass."
       	exit 1
else	
	echo "Pass in the binary."
fi

# Check that the password gives the flag
res=`echo 'ISI_SINGES' | Chall/crackme_2 | grep ZiTF{e4a00a630fc9de3307508e925b6f3200}`

if [  -z "$res" ]; then 
	echo "Incorrect pass."
        exit 1 	
else
	echo "It works !" 
fi
