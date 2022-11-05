package services

import (
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/interfaces"
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/models"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

const UserCollectionName = "users"

type UserService struct {
	interfaces.IUser
}

func (us *UserService) Create(user *models.User) (*models.User, error) {
	// collection := db.Database.Collection(UserCollectionName)
	// user.ID = primitive.NewObjectID()
	// user.CreatedAt = time.Now()
	// _, err := collection.InsertOne(nil, user)
	// if err != nil {
	// 	log.Println(err)
	// 	return nil, err
	// }
	// return user, nil
	return nil, nil
}

func (us *UserService) Get(ID string) (*models.User, error) {
	return nil, nil
}

func (us *UserService) Update(user *models.User) (*models.User, error) {
	return nil, nil
}

func (us *UserService) Delete(ID primitive.ObjectID) (int64, error) {
	return 0, nil
}
