FROM httpd:2.4-alpine

# Enable mod_rewrite
RUN sed -i \
    -e 's/#LoadModule rewrite_module/LoadModule rewrite_module/' \
    -e 's/#LoadModule deflate_module/LoadModule deflate_module/' \
    -e 's/#LoadModule headers_module/LoadModule headers_module/' \
    conf/httpd.conf

# Allow .htaccess overrides
RUN sed -i 's/AllowOverride None/AllowOverride All/g' conf/httpd.conf

# Copy custom config (optional: set ServerName to suppress warning)
RUN echo "ServerName localhost" >> conf/httpd.conf

EXPOSE 80
