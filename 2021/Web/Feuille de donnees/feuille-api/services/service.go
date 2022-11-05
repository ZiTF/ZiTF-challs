package services

import (
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/db"
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/interfaces"
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/models"
)

type ServiceService struct {
	interfaces.IService
}

func (ts *ServiceService) GetAll() ([]*models.Service, error) {
	var services []*models.Service

	rows, err := db.Database.Query("SELECT * FROM services")
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var service models.Service
		rows.Scan(&service.Id, &service.Title, &service.Description, &service.Logo)
		services = append(services, &service)
	}

	return services, nil
}
