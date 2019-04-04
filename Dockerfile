FROM ubuntu:18.10
RUN apt-get update -y \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash \
    && apt-get install nodejs -yq \
    && npm install -g @angular/cli
COPY ./ /app
WORKDIR /app
RUN npm install \
	&& ng build \
    && chmod +x boot.sh
EXPOSE 4200
ENTRYPOINT ["./boot.sh"]