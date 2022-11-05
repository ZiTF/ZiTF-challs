# Solve

Just give the following parameter to the site on the /hello page: 

```jinja2=
{{config}}
```

The template being misinterpreted, the injected python code (interpreted by jinja2) will be executed and will reveal all the configuration variables of the program.

