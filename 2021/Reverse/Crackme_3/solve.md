# Solve

Several solutions :
- run gdb and set a breakpoint ons the XOR operation, display the register containing the byte of key at each round of the loop until we get get all the bytes of the key.
- open the binary with a decompiler like GHidra that will be able to locate the string of the key even if it's non printable.   
