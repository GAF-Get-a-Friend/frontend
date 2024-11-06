# Usa uma imagem PHP com Apache
FROM php:8.0-apache

# Instala a extensão PDO para MySQL
RUN docker-php-ext-install pdo pdo_mysql

# Copia os arquivos para o diretório do Apache
COPY . /var/www/html
