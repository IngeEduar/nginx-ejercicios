FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /usr/share/nginx/html

RUN apt-get update && apt-get install -y vim

COPY html-page /usr/share/nginx/html

EXPOSE 80
EXPOSE 8081

CMD ["nginx", "-g", "daemon off;"]
