import cv2
import sys
import hashlib

### work on Python 3.9 with PNG files.

def conv_byte(secret):
    secret_encoded = secret.encode('ascii')
    secret_byte= ''
    for byte in secret_encoded:
        binary_rpz = bin(byte)
        secret_byte += binary_rpz[2:].zfill(8) # filling zeros
    return secret_byte
    


def encode(secret, pic_path, group):
    '''
    @function encode
    @param secret : string to encode
    @param pic_path : path of the picture in which we'll encode the string
    @param group : number of last bits to change
    '''
    # convert string in bits string
    secret_byte = conv_byte(secret)
    #open img
    try :
        img = cv2.imread(pic_path)
        length, width, chan = img.shape 
    except AttributeError :
        print("Error : File not found")
        sys.exit(2)
    k =  0 # number of bytes already modified
    for i in range(length):
        for j in range(width):
            for p in range(3):
                bin_color = bin(img[i][j][p])[2:].zfill(8)
                last_bit = bin_color[-group:]
                new_bit = ''
                for d in range (group):
                    new_bit += secret_byte[(k*group+d)%len(secret_byte)] # replace last bits by the secret ones all over the frame
                new_bin_color = bin_color[:len(bin_color)-group]
                new_bin_color = new_bin_color + new_bit # ad the new bits to the color
                img[i][j][p] = int(new_bin_color,2) # set the new value
                k += 1
    return img


def main():
    secret1 = 'Your are on the right way, monkey padawan !'
    secret2 = 'ZiTF{2b883f2421e64f9f1a9c3fa3fbfbaea0}'
    pic_path = 'Build/logo.png'
    encoded_picture = encode(secret1, pic_path, 1)
    cv2.imwrite('Chall/evil_logo_1.png', encoded_picture)
    encoded_picture = encode(secret2, pic_path, 2)
    cv2.imwrite('Chall/evil_logo_2.png', encoded_picture)
    
    
if __name__ == "__main__" :
    main()
