#! /bin/bash
tshark -r ../Chall/capture.pcap -T fields -e usbhid.data | grep -E "^.{16}$" > ./data.txt
