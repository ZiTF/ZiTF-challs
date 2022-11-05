FROM docker.io/python:3.7-alpine

RUN pip install --upgrade pip
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r /app/requirements.txt
COPY ./ /app

WORKDIR /app
CMD python3 -u app.py