package interfaces

import (
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/models"
)

type IComment interface {
	GetAll() ([]*models.Comment, error)
}

type ITeam interface {
	GetAll() ([]*models.TeamMember, error)
	GetByName(ID string) ([]*models.TeamMember, error) // vulnerability here
}

type IUser interface {
	Create(user *models.User) (*models.User, error)
	Get(ID string) (*models.User, error)
	Update(user *models.User) (*models.User, error)
}

type IService interface {
	GetAll() ([]*models.Service, error)
}
