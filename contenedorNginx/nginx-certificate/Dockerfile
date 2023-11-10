FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY certificate.crt /etc/nginx/ssl/nginx-selfsigned.crt
COPY nginx-private.key /etc/nginx/ssl/nginx-selfsigned.key

RUN mkdir -p /var/www/html

COPY html-page /var/www/html

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
