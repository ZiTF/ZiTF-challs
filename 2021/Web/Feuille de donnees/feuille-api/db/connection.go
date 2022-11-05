package db

import (
	"log"

	"database/sql"

	_ "github.com/lib/pq"
	"github.com/spf13/viper"
)

type User struct {
	Id        int
	Firstname string
	Password  string
}

var Database *sql.DB

func Configure() {
	var pg_con_string string = viper.GetString("PG_CON_STRING")

	log.Println("Opening connection to the database.")
	db, _ := sql.Open("postgres", pg_con_string)

	log.Println(db)
	Database = db
}
