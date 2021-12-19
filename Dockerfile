FROM centos:8
RUN dnf module -y enable nodejs:16
RUN dnf module -y install nodejs:16