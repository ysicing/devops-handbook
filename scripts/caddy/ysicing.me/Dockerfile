FROM ysicing/debian as geoip

RUN cd /root/ && wget https://github.com/Hackl0us/GeoIP2-CN/raw/release/Country.mmdb

FROM ghcr.io/ysicing/caddy2

COPY --from=geoip /root/Country.mmdb /etc/caddy/geoip.mmdb

COPY ./build /root/www

COPY scripts/caddy/ysicing.me/ysicing.me.caddy /etc/caddy/default.caddy
