package handlers

import (
	"log"
	"net/http"
	"net/url"

	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/interfaces"
	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

type TeamResource struct {
	TeamServ interfaces.ITeam
}

func (rs TeamResource) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/", rs.GetAll)
	r.Get("/{name}", rs.GetId)
	return r
}

func (rs *TeamResource) GetId(w http.ResponseWriter, r *http.Request) {

	name, _ := url.Parse(chi.URLParam(r, "name"))
	// name, _ := url.QueryUnescape(chi.URLParam(r, "name"))
	log.Println(name)
	log.Println(name.Path)

	member, err := rs.TeamServ.GetByName(name.Path)
	if err != nil {
		render.Render(w, r, ErrInvalidRequest(err))
	}
	render.JSON(w, r, member)
}

func (rs *TeamResource) GetAll(w http.ResponseWriter, r *http.Request) {
	teams, err := rs.TeamServ.GetAll()
	if err != nil {
		render.Render(w, r, ErrInternalServer(err))
	}

	render.JSON(w, r, teams)
}
