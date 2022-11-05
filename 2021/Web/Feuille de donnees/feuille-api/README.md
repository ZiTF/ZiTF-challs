# macaca-to-gorilla-api

Folders:

```shell
.
├── bin/                # binaries output
├── db/                 # database configuration
├── handlers/           # routes handlers
├── interfaces/         # CRUD interfaces for each model
├── models/             # Entities of the documents store into the db
├── services/           # CRUD implemented from the interfaces for each models
├── utils/              # utils
├── docker-compose.yml  # docker services (mongo,mongo-express and the api)
├── Dockerfile          # doccker image of the api
├── go.mod
├── go.sum
├── main.go             # <-- entrypoint configuration and httpserver
├── Makefile            # makefile in order to build, clean...
└── README.md           # Entry point for docs,info about the project
```

