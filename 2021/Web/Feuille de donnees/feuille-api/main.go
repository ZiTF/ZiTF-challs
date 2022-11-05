package main

import (
	"log"
	"net/http"
	"time"

	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/db"
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/handlers"
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/services"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
	"github.com/go-chi/render"
	"github.com/spf13/viper"
)

func init() {
	viper.SetConfigFile(".env")
	viper.ReadInConfig()

	handlers.Configure()
	db.Configure()
}

func main() {
	defer func() {
		db.Database.Close()
		log.Println("Database disconnection")
	}()

	r := chi.NewRouter()

	// middleware
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middleware.Timeout(60 * time.Second))
	r.Use(middleware.URLFormat)
	r.Use(render.SetContentType(render.ContentTypeJSON))

	// cors
	r.Use(cors.Handler(cors.Options{
		// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
		// AllowedOrigins: []string{"https://*", "http://*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	//Routes
	r.Mount("/team", handlers.TeamResource{
		TeamServ: &services.TeamService{},
	}.Routes())

	r.Mount("/comments", handlers.CommentResource{
		CommentServ: &services.CommentService{},
	}.Routes())

	r.Mount("/services", handlers.ServiceResource{
		ServiceServ: &services.ServiceService{},
	}.Routes())

	http.ListenAndServe(":3333", r)
}
