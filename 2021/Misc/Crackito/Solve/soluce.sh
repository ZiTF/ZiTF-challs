#! /bin/bash

# very light rockyou.txt file to not overweight the repo
# But the solution is still the same (should take around 1 minute on a standard PC)

hashcat -m 7400 -a 0 hash.txt rockyou.txt
