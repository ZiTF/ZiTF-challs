package models

type TeamMember struct {
	Id    int    `json:"id,omitempty"`
	Role  string `json:"role,omitempty"`
	Name  string `json:"name,omitempty"`
	Url   string `json:"url,omitempty"`
	Quote string `json:"quote,omitempty"`
}
