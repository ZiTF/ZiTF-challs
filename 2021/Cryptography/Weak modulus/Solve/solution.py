#!/usr/bin/python3
import sys
from Crypto.Util.number import long_to_bytes


if __name__ == "__main__":
    filename = sys.argv[1]
    with open(filename, "rb") as f :
        encrypted = int(f.read())

    e = 1249101561143
    p = 313031561
    q = 152213254339711744214902619433934888159181025988504769666914384030236040347439915073522711000448485858741424486354948197185635296558790121485545669946041
    n = 47647552610849991581623686424393574412828853046763216104779659686338258908418098969172243993422261228448253602327312634239155223658496000000000000000000000000001

    assert n == p*q

    phi = (p-1) * (q-1)
    d = pow(e, -1, phi)

    decrypted = long_to_bytes(pow(encrypted,d,n))
    print(decrypted)
    if b"ZiTF" in decrypted :
        print("It works!")
        sys.exit(0)
    else :
        print("Couldn't find flag.")
        sys.exit(1)
