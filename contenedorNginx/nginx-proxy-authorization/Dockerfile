FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY .htpasswd /.htpasswd

RUN mkdir -p /var/www/html

RUN apt-get update && apt-get install -y vim

COPY html-page /var/www/html

EXPOSE 8080
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

