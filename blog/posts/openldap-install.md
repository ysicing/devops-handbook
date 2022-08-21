---
title: "OpenLDAP安装初体验"
date: 2020-05-18T22:55:18+08:00
description: "OpenLDAP安装初体验"
tags:
- ldap
---

<!-- truncate -->

## OpenLDAP安装初体验

> 简介这里不在描述，google即可

### docke快速部署

```yaml
version: '2'
services:
  openldap:
    image: osixia/openldap:1.3.0
    container_name: openldap
    environment:
      LDAP_LOG_LEVEL: "256"
      LDAP_ORGANISATION: "Godu Inc."
      LDAP_DOMAIN: "ysicing.me"
      LDAP_BASE_DN: ""
      LDAP_ADMIN_PASSWORD: "meadmin"
      LDAP_CONFIG_PASSWORD: "meconfig"
      LDAP_READONLY_USER: "true"
      LDAP_READONLY_USER_USERNAME: "readonly"
      LDAP_READONLY_USER_PASSWORD: "readonly"
      LDAP_RFC2307BIS_SCHEMA: "false"
      LDAP_BACKEND: "mdb"
      LDAP_TLS: "false"
      LDAP_REPLICATION: "false"
      KEEP_EXISTING_CONFIG: "false"
      LDAP_REMOVE_CONFIG_AFTER_SETUP: "true"
      LDAP_SSL_HELPER_PREFIX: "ldap"
    tty: true
    stdin_open: true
    ports:
      - "389:389"
      - "636:636"
    domainname: "ldap.ysicing.me" # important: same as hostname
#    hostname: "ldap.ysicing.me"
    command: ["--copy-service", "--loglevel", "debug"]
  phpldapadmin:
    image: osixia/phpldapadmin:latest
    container_name: phpldapadmin
    environment:
      PHPLDAPADMIN_LDAP_HOSTS: "openldap"
      PHPLDAPADMIN_HTTPS: "false"
    ports:
      - "8080:80"
    depends_on:
      - openldap
```

### 验证

```
din openldap
ldapsearch -x -H ldap://localhost -b dc=ysicing,dc=me -D 'cn=admin,dc=ysicing,dc=me' -w meadmin
```

或者访问`127.0.0.1:8080`
