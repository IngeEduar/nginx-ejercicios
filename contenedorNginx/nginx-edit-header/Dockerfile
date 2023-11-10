FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/html

COPY html-page /var/www/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
