FROM httpd:2.4
COPY ./index.html /usr/local/apache2/htdocs/
COPY ./bundle.js /usr/local/apache2/htdocs/
COPY ./assets /usr/local/apache2/htdocs/assets/
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
