package services

import (
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/db"
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/interfaces"
	"github.com/YassineBengana/ZiTF_2021/web/feuille/feuille-api/models"
)

type CommentService struct {
	interfaces.IComment
}

func (ts *CommentService) GetAll() ([]*models.Comment, error) {
	var comments []*models.Comment

	rows, err := db.Database.Query("SELECT * FROM comments")
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var comment models.Comment
		rows.Scan(&comment.Id, &comment.Name, &comment.Role, &comment.Url, &comment.Comment)
		comments = append(comments, &comment)
	}

	return comments, nil
}
