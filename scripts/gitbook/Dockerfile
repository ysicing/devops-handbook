FROM ysicing/alpine

LABEL maintainer="ysicing <i@ysicing.me>"

ARG TZ="Asia/Shanghai"

ENV TZ ${TZ}

RUN  sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && apk upgrade \
    && apk add --no-cache bash tzdata curl bash git jq tar libc6-compat g++ openssh nodejs-current-npm ruby ruby-dev ruby-rdoc \
    && sed -i -e "s/bin\/ash/bin\/bash/" /etc/passwd \
    && ln -sf /usr/share/zoneinfo/${TZ} /etc/localtime \
    && echo ${TZ} > /etc/timezone \
    && date \
    && npm install -g markdown-spellcheck webpack webpack-cli \
    && gem install mdl \
    && rm -rf /var/cache/apk/* 

# Install html-proofer
RUN echo 'gem: --no-document' >> /etc/gemrc

RUN apk add --no-cache --virtual build-dependencies \
  build-base \
  libcurl \
  libxml2-dev \
  libxslt-dev && \
  apk add --no-cache --update build-base libffi-dev && \
  gem install nokogiri -- --use-system-libraries && \
  gem install ffi && \
  gem install etc && \
  gem install bigdecimal && \
  gem install html-proofer --no-ri --no-rdoc && \
  apk del build-dependencies && \
  apk add --no-cache bash git libcurl libxml2 libxslt && \
  rm -rf /var/cache/apk/* && \
  rm -rf /root/.gem/* && \
  rm -rf /usr/local/bundle/cache/*.gem && \
  rm -rf /usr/lib/ruby/gems/*/cache/*.gem

# Install gitbook
RUN npm install gitbook-cli -g && \
  gitbook -V