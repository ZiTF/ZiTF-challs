package handlers

import (
	"context"
	"github.com/go-chi/jwtauth"
	"github.com/spf13/viper"
	"log"
	"time"
)

type Claim struct {
	userId   string
	email    string
	username string
}

var tokenAuth *jwtauth.JWTAuth

func Configure() {
	var secret string = viper.GetString("SECRET_KEY")
	tokenAuth = jwtauth.New("HS256", []byte(secret), nil)

	tokenString := Encode(Claim{userId: "123", email: "test@gmail.com", username: "bob"})
	//	_, tokenString, _ := tokenAuth.Encode(map[string]interface{}{"user_id": 123, "test": "ok"})
	log.Printf("DEBUG: a sample jwt is\n%s\n\n", tokenString)
	tokenClaims := Decode(tokenString)
	log.Printf("DEBUG: decode jwt token:\n%#v\n\n", tokenClaims)
}

func Encode(user Claim) string {
	claims := map[string]interface{}{
		"userId":   user.userId,
		"email":    user.email,
		"username": user.username,
	}

	jwtauth.SetExpiryIn(claims, 60*time.Second)
	jwtauth.SetIssuedNow(claims)
	_, tokenString, err := tokenAuth.Encode(claims)
	if err != nil {
		log.Fatalln("Failed to encode claims")
		panic(err)
	}

	return tokenString
}

func Decode(tokenString string) map[string]interface{} {
	token, _ := tokenAuth.Decode(tokenString)

	tokenClaims, err := token.AsMap(context.Background())
	if err != nil {
		log.Fatalln(err.Error())
	}
	return tokenClaims
}
