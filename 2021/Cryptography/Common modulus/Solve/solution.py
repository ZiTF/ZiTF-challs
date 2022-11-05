#!/usr/bin/python3
import sys, math
import numpy as np
from Crypto.Util.number import long_to_bytes


if __name__ == "__main__":
    filename1 = sys.argv[1]
    with open(filename1, "rb") as f :
        encrypted1 = int(f.read())
    
    filename2 = sys.argv[2]
    with open(filename2, "rb") as f :
        encrypted2 = int(f.read())

    e1 = 0x0a10001
    e2 = 0x0aef62b

    n = 0xa709e2f84ac0e21eb0caa018cf7f697f774e96f8115fc2359e9cf60b1dd8d4048d974cdf8422bef6be3c162b04b916f7ea2133f0e3e4e0eee164859bd9c1e0ef0357c142f4f633b4add4aab86c8f8895cd33fbf4e024d9a3ad6be6267570b4a72d2c34354e0139e74ada665a16a2611490debb8e131a6cffc7ef25e74240803dd71a4fcd953c988111b0aa9bbc4c57024fc5e8c4462ad9049c7f1abed859c63455fa6d58b5cc34a3d3206ff74b9e96c336dbacf0cdd18ed0c66796ce00ab07f36b24cbe3342523fd8215a8e77f89e86a08db911f237459388dee642dae7cb2644a03e71ed5c6fa5077cf4090fafa556048b536b879a88f628698f0c7b420c4b7

    assert math.gcd(e1,e2) == 1 and math.gcd(e2,n) == 1
    # So according to Bezout's th. the equation u.e1 + v.e2 = 1 has solutions

    def coef_bezout_pgcd(a, b) :
        """Bezout coefficients (u,v) and d=gcd(a,b) such that au + bv = d."""
        P = np.array([[1, 0], [0, 1]])
        while b > 0 : a, b, P = b, a%b, np.dot(np.array([[0,1], [1, -(a//b)]]), P)
        return tuple(P[0, :]), a
        
    (s1,s2),_ = coef_bezout_pgcd(e1,e2)

    M1 = pow(encrypted1,int(s1),n)
    M2 = pow(pow(encrypted2,-1,n),int(-s2),n)

    decrypted = long_to_bytes(  M1 * M2 % n).decode()
    print(decrypted)
    if "ZiTF" in decrypted :
        print("It works !")
        sys.exit(0)
    else :
        print("Couldn't find flag.")
        sys.exit(1)
