package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/interfaces"

	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/models"
	"github.com/go-chi/chi"
	"github.com/go-chi/jwtauth"
	"github.com/go-chi/render"
)

type AuthResource struct {
	UserServ interfaces.IUser
}

func (rs AuthResource) Routes() chi.Router {
	r := chi.NewRouter()

	r.Group(func(r chi.Router) {
		r.Use(jwtauth.Verifier(tokenAuth))
		r.Use(jwtauth.Authenticator)

		r.Get("/{id}", rs.GetId)
	})

	r.Post("/login", rs.Login)
	return r
}

func (rs *AuthResource) GetId(w http.ResponseWriter, r *http.Request) {
	//	w.Write([]byte("auth GET GetId"))
	render.JSON(w, r, map[string]interface{}{"auth Get": "test"})

}

func (rs *AuthResource) Login(w http.ResponseWriter, r *http.Request) {
	var user *models.User

	err := json.NewDecoder(r.Body).Decode(&user)

	if err != nil {
		log.Fatalln("Error body request")
	}

	createdUser, err := rs.UserServ.Create(user)
	if err != nil {
		render.Render(w, r, ErrNotFound())
		return
	}

	//	w.Write([]byte("auth PSOT Login"))
	//	rs.UserServ.Create()
	render.JSON(w, r, createdUser)
}
