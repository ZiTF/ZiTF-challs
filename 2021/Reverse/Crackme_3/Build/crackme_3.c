#include <stdio.h>
#include <string.h>

#define KEY_LEN 8
#define FLAG_LEN 38


int main(){
    static char xored_flag[] = {201,220,253,27,23,163,102,46,246,134,158,109,
                                15,162,54,35,167,133,152,101,95,170,49,44,166,
                                130,155,104,9,242,101,41,170,141,207,63,14,238};
    char xor_key[] = {0x93,0xb5,0xa9,0x5d,0x6c,0x93,0x57,0x1b};


    printf("\U0001F648 We know that some stupid humans \U0001F922 try to read the secrets of our files. \U0001F648\n");
    printf("Being endowed with a superior intelligence, \U0001F64A we found a way to hide the password. \U0001F412\n");
    printf("Please enter your password to access this most important secret \U0001F649 :\n");

    char input[KEY_LEN + 1];
    fgets(input,KEY_LEN + 1,stdin);

    int i;
    char deciphered_flag[FLAG_LEN];

    printf("Decryption using XOR .... \U0001F9D9\n");

    for(i=0; i< FLAG_LEN; i++){
        deciphered_flag[i] = xored_flag[i] ^ xor_key[i % KEY_LEN];
    }

    if (!strncmp(xor_key, input, KEY_LEN)){       
        printf("Welcome back comrade, you will find attached a banana to reward your efforts : \U0001F34C\nHere is your secret : %s\n", deciphered_flag);
        return 0;
    }
    else{
        printf("You are not a monkey, GET OUT OF HERE \U0001F631\U0001F52B\U0001F435\n");
        return -1;
    }

}
