# Solve

Since the prime factorization of the module used during encryption is known, we can use a tool like factordb to retrieve the factors of the module, we can then find the private key used for decryption and recover the message.
factordb link : http://factordb.com/index.php?query=47647552610849991581623686424393574412828853046763216104779659686338258908418098969172243993422261228448253602327312634239155223658496000000000000000000000000001
Given the small size of one of the two factors, a use of Pollard's rho algorithm can also be considered.


