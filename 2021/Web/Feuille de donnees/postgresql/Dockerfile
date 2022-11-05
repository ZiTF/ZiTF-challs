FROM docker.io/postgres:13.4-alpine
COPY ./initdb/ /docker-entrypoint-initdb.d/

CMD ["docker-entrypoint.sh", "postgres"]
