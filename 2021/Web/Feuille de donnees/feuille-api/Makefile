APP=server

all: build

.PHONY: build
## build: build the application
build: clean
	@echo "Building..."
	@go build -o bin/${APP} main.go

.PHONY: test
## test: runs go test with default values
test:
	go test -v -count=1 -race ./...

.PHONY: run
## run: runs go run main.go
run:
	go run -race main.go

.PHONY: clean
## clean: cleans the binary built from make build command 
clean:
	rm -rf ./bin/${APP}
	@go clean
	@echo "Done cleaning"

.PHONY: clean-all
## clean-all: cleans all the binaries inside bin dir
clean-all:
	rm -rf ./bin/*
	@go clean
	@echo "Done cleaning all"

.PHONY: setup
## setup: setup go modules
setup:
	@go mod init \
		&& go mod tidy \
		&& go mod vendor

## compile: Compile for every OS and platform
compile: clean-all
	@echo "Compiling for every OS and Platform"
	GOOS=linux GOARCH=arm go build -o bin/${APP}-linux-arm main.go
	GOOS=linux GOARCH=arm64 go build -o bin/${APP}-linux-arm64 main.go
	GOOS=freebsd GOARCH=386 go build -o bin/${APP}-freebsd-386 main.go

		
.PHONY: help
## help: prints this help message
help:
	@echo "Usage: \n"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'

