FROM python:3.7-alpine
RUN mkdir /opt/monkeybot
WORKDIR /opt/monkeybot
ADD requirements.txt /opt/monkeybot
RUN pip install -r requirements.txt
ENTRYPOINT ["python", "-u", "monkeybot.py"]
