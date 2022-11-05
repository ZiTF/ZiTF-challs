# Solve

the 'globals()' function in Python allows us to list all variables defined in a script. So it can allow us to get the flag contained in a varibalee but unfortunately the output is too long to be in a Discord message.
To bypass this problem, we can look at the filter's output to show only strings that contain "ZiTF" :

```!m o [x for x in globals().values() if isinstance(x,str) and 'ZiTF' in x]```

