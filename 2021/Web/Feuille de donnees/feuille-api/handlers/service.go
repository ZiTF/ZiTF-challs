package handlers

import (
	"net/http"

	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/interfaces"
	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

type ServiceResource struct {
	ServiceServ interfaces.IService
}

func (rs ServiceResource) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/", rs.GetAll)
	return r
}

func (rs *ServiceResource) GetAll(w http.ResponseWriter, r *http.Request) {
	services, err := rs.ServiceServ.GetAll()
	if err != nil {
		render.Render(w, r, ErrInternalServer(err))
	}

	render.JSON(w, r, services)
}
