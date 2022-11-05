package models

type Comment struct {
	Id      int    `json:"id,omitempty"`
	Role    string `json:"role,omitempty"`
	Name    string `json:"name,omitempty"`
	Url     string `json:"url,omitempty"`
	Comment string `json:"comment,omitempty"`
}
