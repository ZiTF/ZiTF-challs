# Build

## Flag

```sh
echo -n "ThisIsAMacacashChall" | md5sum
3e9e04b5b546706f0fe9291ba58a3a9f  -
```

Flag = `ZiTF{3e9e04b5b546706f0fe9291ba58a3a9f}` added into the macacash page

## Run 

```sh
docker build -t macacash_web -f Dockerfile .
```

```
docker run -it localhost/macacash_web -p 3001:3000
```

