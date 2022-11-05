package handlers

import (
	"net/http"

	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/interfaces"
	"github.com/go-chi/chi"
	"github.com/go-chi/render"
)

type CommentResource struct {
	CommentServ interfaces.IComment
}

func (rs CommentResource) Routes() chi.Router {
	r := chi.NewRouter()
	r.Get("/", rs.GetAll)
	return r
}

func (rs *CommentResource) GetAll(w http.ResponseWriter, r *http.Request) {
	comments, err := rs.CommentServ.GetAll()
	if err != nil {
		render.Render(w, r, ErrInternalServer(err))
	}

	render.JSON(w, r, comments)
}
