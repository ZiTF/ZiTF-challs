#!/usr/bin/python3
import sys
from Crypto.Util.number import bytes_to_long


if __name__ == "__main__":
    filename = sys.argv[1]
    with open(filename, "rb") as f :
        flag = bytes_to_long(f.read())

    e = 1249101561143
    n = 47647552610849991581623686424393574412828853046763216104779659686338258908418098969172243993422261228448253602327312634239155223658496000000000000000000000000001

    encrypted = pow(flag,e,n)

    with open("flag.cipher", "w") as f :
        f.write(str(encrypted))
