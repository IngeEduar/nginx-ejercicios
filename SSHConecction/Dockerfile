# Utiliza una imagen base de Ubuntu
FROM ubuntu

# Actualiza el sistema y ejecuta el comando para instalar SSH y otros paquetes necesarios
RUN apt-get update && apt-get install -y openssh-server

# Crea el directorio de separación de privilegios
RUN mkdir /run/sshd
# RUN mkdir /home/eduar

# Agrega un usuario "Eduar" y establece una contraseña para él (cámbiala por una segura)
RUN useradd -d /home/eduar -s /bin/bash eduar
RUN echo 'eduar:eduar' | chpasswd

# Copia el archivo de configuración de SSH
COPY sshd_config /etc/ssh/sshd_config
COPY authorized_keys /home/eduar/.ssh/authorized_keys

# Abre el puerto 22 para SSH y el puerto 2222 para SFTP
EXPOSE 22
EXPOSE 2222

# Inicia el servidor SSH
CMD ["/usr/sbin/sshd", "-D"]

