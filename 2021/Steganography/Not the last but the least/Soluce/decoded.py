import cv2

def decode(pic_path, group):
    '''
    @function decode
    @param picp_path path of the picture to decode
    @param group numberof last bits to consider
    '''
    img = cv2.imread(pic_path)
    length, width, chan = img.shape 
    buff_last_bits = ''
    encoded_message = ''
    for i in range(length):
        for j in range(width):
            for color in range(3):
                bin_color = bin(img[i][j][color])[2:].zfill(8)
                last_bit = bin_color[-group:]
                buff_last_bits += last_bit # we keep each least(s) bit(s)
                while len(buff_last_bits) >= 8 :  # each 8 bits in the buffer we convert it in ascii if it's possible
                    sliced = buff_last_bits[:8]
                    buff_last_bits = buff_last_bits[8:]
                    sliced_ascii = int(sliced, 2)
                    if sliced_ascii>=32 and sliced_ascii<=126:
                        encoded_message += chr(sliced_ascii)
    return encoded_message



def main():
    pic_path = '../Chall/evil_logo_1.png'
    k = 1
    print('[Considering %d last bits] ' %k, decode(pic_path, k))
    input("Press Enter to continue...")
    pic_path = '../Chall/evil_logo_2.png'
    k = 2
    print('[Considering %d last bits] ' %k, decode(pic_path, k))
    return 0
        
    
if __name__ == "__main__" :
    main()