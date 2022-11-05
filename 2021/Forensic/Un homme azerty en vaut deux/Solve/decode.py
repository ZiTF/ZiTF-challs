def init_hid_code(hid, shifted_hid, alt_gr_hid):
    '''
    @function init_hid_code
    @param hid dictionary of non shifted keystrokes hid code
    @param shifted_hid dictionary of shifted keystrokes hid code
    '''
    hid[4]="q";           shifted_hid[4]="Q"
    hid[5]="b";           shifted_hid[5]="B"
    hid[6]="c";           shifted_hid[6]="C"
    hid[7]="d";           shifted_hid[7]="D"
    hid[8]="e";           shifted_hid[8]="E"
    hid[9]="f";           shifted_hid[9]="F"
    hid[10]="g";          shifted_hid[10]="G"
    hid[11]="h";          shifted_hid[11]="H"
    hid[12]="i";          shifted_hid[12]="I"
    hid[13]="j";          shifted_hid[13]="J"
    hid[14]="k";          shifted_hid[14]="K"
    hid[15]="l";          shifted_hid[15]="L"
    hid[16]=",";          shifted_hid[16]="?"
    hid[17]="n";          shifted_hid[17]="N"
    hid[18]="o";          shifted_hid[18]="O"
    hid[19]="p";          shifted_hid[19]="P"
    hid[20]="a";          shifted_hid[20]="A"
    hid[21]="r";          shifted_hid[21]="R"
    hid[22]="s";          shifted_hid[22]="S"
    hid[23]="t";          shifted_hid[23]="T"
    hid[24]="u";          shifted_hid[24]="U"
    hid[25]="v";          shifted_hid[25]="V"
    hid[26]="z";          shifted_hid[26]="Z"
    hid[27]="x";          shifted_hid[27]="X"
    hid[28]="y";          shifted_hid[28]="Y"
    hid[29]="w";          shifted_hid[29]="W"
    hid[30]="&";          shifted_hid[30]="1"
    hid[31]="é";          shifted_hid[31]="2"
    hid[32]="\"";          shifted_hid[32]="3"
    hid[33]="'";          shifted_hid[33]="4"
    hid[34]="(";          shifted_hid[34]="5"
    hid[35]="-";          shifted_hid[35]="6"
    hid[36]="è";          shifted_hid[36]="7"
    hid[37]="_";          shifted_hid[37]="8"
    hid[38]="ç";          shifted_hid[38]="9"
    hid[39]="à";          shifted_hid[39]="0"
    hid[40]="Enter";      shifted_hid[40]="Enter"
    hid[41]="esc";        shifted_hid[41]="esc"
    hid[42]="del";        shifted_hid[42]="del"
    hid[43]="tab";        shifted_hid[43]="tab"
    hid[44]="space";      shifted_hid[44]="space"
    hid[45]=")";          shifted_hid[45]="°"
    hid[46]="=";          shifted_hid[46]="+"
    hid[47]="^";          shifted_hid[47]="¨"
    hid[48]="$";          shifted_hid[48]="£"
    hid[49]="\\";         shifted_hid[49]="|"
    hid[50]=" ";          shifted_hid[50]=" "
    hid[51]="m";          shifted_hid[51]="M"
    hid[52]="'";          shifted_hid[52]="\""
    hid[53]="`";          shifted_hid[53]="~"
    hid[54]=";";          shifted_hid[54]="."
    hid[55]=":";          shifted_hid[55]="/"
    hid[56]="!";          shifted_hid[56]="§"
    hid[57]="CapsLock";   shifted_hid[57]="CapsLock"
    hid[79]="RightArrow"; shifted_hid[79]="RightArrow"
    hid[80]="LeftArrow";  shifted_hid[80]="LeftArrow"
    hid[84]="/";          shifted_hid[84]="/"
    hid[85]="*";          shifted_hid[85]="*"
    hid[86]="-";          shifted_hid[86]="-"
    hid[87]="+";          shifted_hid[87]="+"
    hid[88]="Enter";      shifted_hid[88]="Enter"
    hid[89]="1";          shifted_hid[89]="1"
    hid[90]="2";          shifted_hid[90]="2"
    hid[91]="3";          shifted_hid[91]="3"
    hid[92]="4";          shifted_hid[92]="4"
    hid[93]="5";          shifted_hid[93]="5"
    hid[94]="6";          shifted_hid[94]="6"
    hid[95]="7";          shifted_hid[95]="7"
    hid[96]="8";          shifted_hid[96]="8"
    hid[97]="9";          shifted_hid[97]="9"
    hid[98]="0";          shifted_hid[98]="0"
    hid[99]=".";          shifted_hid[99]="."
    alt_gr_hid[33] = '{'
    alt_gr_hid[46] = '}'
    
    return hid, shifted_hid, alt_gr_hid
    
    
def decode(file_path, hid, shifted_hid, alt_gr_hid):
    f = open(file_path, 'r')
    lines = f.readlines()
    decode = ''
    for line in lines :
        shift = line[0:2]
        hid_code = int(line[4:6],16)
        if hid_code > 3 and hid_code < 100 :
            if shift == '20' or shift == '02' :
                decode += '%s ' %shifted_hid[hid_code]
            else :
                if shift == '40' :
                    decode += '%s ' %alt_gr_hid[hid_code]
                else :
                    decode += '%s ' %hid[hid_code]
    return decode
                
        
    
    
    
def main():
    hid = {}
    shifted_hid = {}
    alt_gr_hid = {}
    hid, shifted_hid, alt_gr_hid = init_hid_code(hid, shifted_hid, alt_gr_hid)
    print(decode('./data.txt', hid, shifted_hid, alt_gr_hid))
    return 0


main()
