#!/bin/bash

get_distribution() {
	lsb_dist=""
	# Every system that we officially support has /etc/os-release
	if [ -r /etc/os-release ]; then
		lsb_dist="$(. /etc/os-release && echo "$ID")"
	fi
	# Returning an empty string here should be alright since the
	# case statements don't act unless you provide an actual value
	echo "$lsb_dist"
}

lsb_dist=$( get_distribution )
lsb_dist="$(echo "$lsb_dist" | tr '[:upper:]' '[:lower:]')"

case "$lsb_dist" in
		debian|raspbian)
			dist_version="$(sed 's/\/.*//' /etc/debian_version | sed 's/\..*//')"
			case "$dist_version" in
				10)
					update-alternatives --set iptables /usr/sbin/iptables-legacy && echo 1 || echo 0
          update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy && echo 1 || echo 0 
          update-alternatives --set arptables /usr/sbin/arptables-legacy && echo 1 || echo 0
          update-alternatives --set ebtables /usr/sbin/ebtables-legacy && echo 1 || echo 0
				;;
			esac
		;;
		*)
			echo "..."
		;;
esac

curl -fsSL https://get.docker.com | bash -s docker --mirror AzureChinaCloud

cat > /etc/docker/daemon.json <<EOF
{
  "registry-mirrors": ["https://dockerhub.azk8s.cn","https://reg-mirror.qiniu.com"],
  "bip": "172.30.42.1/16",
  "max-concurrent-downloads": 10,
  "log-driver": "json-file",
  "log-level": "warn",
  "log-opts": {
    "max-size": "20m",
    "max-file": "2"
  },
  "storage-driver": "overlay2"
}
EOF

systemctl enable docker
systemctl daemon-reload
systemctl start docker
systemctl restart docker 

docker info -f "{{json .ServerVersion }}"

docker run --rm -v /usr/local/bin:/sysdir ysicing/tools tar zxf /pkg.tgz -C /sysdir
