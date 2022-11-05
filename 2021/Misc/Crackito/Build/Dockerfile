FROM docker.io/debian:latest

RUN adduser monkeyz
RUN (echo chimpanzee; echo chimpanzee) | passwd monkeyz
RUN apt update && apt install -y openssh-server

RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/g' /etc/ssh/sshd_config
EXPOSE 22
RUN service ssh start
RUN echo 'ZiTF{02c89dddbc627161d428887c0d94576e}' > /flag
RUN chmod 444 /flag
CMD [ "/usr/sbin/sshd" , "-D"]