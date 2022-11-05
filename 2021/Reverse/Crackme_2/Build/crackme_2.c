#include <stdio.h>
#include <string.h>

#define KEY_LEN 10
#define FLAG_LEN 38


int main(){
    int xored_flag[] = {19,58,29,25,40,44,122,38,117,99,40,101,122,111,53,
                        42,119,35,32,96,122,99,126,106,99,113,43,126,119,102,
                        43,101,47,108,97,121,126,58};
    static char xor_key[] = "ISI_SINGES";


    printf("\U0001F648 STOP! \U0001F648\n");
    printf("The access to this place is strictly reserved to our monkey friends. \U0001F412 !\n");
    printf("Prove you are one of us by entering the correct password \U0001F649 : \n");

    char input[KEY_LEN + 1];
    fgets(input,KEY_LEN + 1,stdin);

    if (!strncmp(xor_key, input, KEY_LEN)){
        int i;
        char deciphered_flag[FLAG_LEN];

        printf("Decryption using XOR .... \U0001F34C\n");

        for(i=0; i< FLAG_LEN; i++){
            deciphered_flag[i] = xored_flag[i] ^ xor_key[i % KEY_LEN];
        }

        printf("Welcome my monkey bro, here is your secret : %s\n", deciphered_flag);
    }
    else{
        printf("You are not a monkey, GET OUT OF HERE \U0001F631\U0001F52B\U0001F435\n");
    }

}
