package services

import (
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/db"
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/interfaces"
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/models"
)

type TeamService struct {
	interfaces.ITeam
}

func (ts *TeamService) GetAll() ([]*models.TeamMember, error) {
	var members []*models.TeamMember

	rows, err := db.Database.Query("SELECT * FROM team")
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var member models.TeamMember
		rows.Scan(&member.Id, &member.Name, &member.Role, &member.Url, &member.Quote)
		members = append(members, &member)
	}

	return members, nil
}

func (ts *TeamService) GetByName(name string) ([]*models.TeamMember, error) {
	var members []*models.TeamMember

	// vulnerabilty here not even following the documentation with $1
	rows, err := db.Database.Query("SELECT * FROM team WHERE name ='" + name + "'")
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		var member models.TeamMember
		rows.Scan(&member.Id, &member.Name, &member.Role, &member.Url, &member.Quote)
		members = append(members, &member)
	}
	if err != nil {
		return nil, err
	}

	return members, nil
}
