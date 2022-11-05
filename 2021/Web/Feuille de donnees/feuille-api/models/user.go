package models

type User struct {
	Id        int    `json:"_id,omitempty"`
	Firstname string `json:"username,omitempty"`
	Password  string `json:"email,omitempty"`
}
