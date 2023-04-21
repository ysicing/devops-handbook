#!/bin/bash

## License: GPL
## It can reinstall Debian system with network.
## Default root password: vagrant
## Blog: https://ysicing.me
## Written By ysicing

curl --fail --silent --location -o /tmp/stdlib.sh https://sh.ysicing.me/help/func.sh || {
	curl --fail --silent --location -o /tmp/stdlib.sh https://raw.githubusercontent.com/ysicing/devops-handbook/master/hack/help/func.sh
}

source /tmp/stdlib.sh
rm /tmp/stdlib.sh

while [[ $# -ge 1 ]]; do
  case $1 in
    -p|--password)
      shift
      myPASSWORD="$1"
      shift
      ;;
    -m|--mirror)
      shift
      LinuxMirror="$1"
      shift
      ;;
    -s|--dev)
      shift
      sDev="$1"
      shift
      ;;
    *)
      notice "not support"
      ;;
    esac
  done

[[ "$EUID" -ne '0' ]] && notice "Error:This script must be run as root!"

check_dependence() {
  for BIN_DEP in `echo "$1" |sed 's/,/\n/g'`;do
    if command_exists $BIN_DEP; then
      info "$BIN_DEP" "installed"
    else
      notice "$BIN_DEP not install"
    fi
  done
}

progress "prepare install"

check_dependence wget,awk,grep,sed,cut,cat,cpio,gzip,find,dirname,basename,openssl;

[[ -f '/boot/grub/grub.cfg' ]] && GRUBVER='0' && GRUBDIR='/boot/grub' && GRUBFILE='grub.cfg';
[[ -z "$GRUBDIR" ]] && [[ -f '/boot/grub2/grub.cfg' ]] && GRUBVER='0' && GRUBDIR='/boot/grub2' && GRUBFILE='grub.cfg';
[[ -z "$GRUBDIR" ]] && [[ -f '/boot/grub/grub.conf' ]] && GRUBVER='1' && GRUBDIR='/boot/grub' && GRUBFILE='grub.conf';
[ -z "$GRUBDIR" -o -z "$GRUBFILE" ] && notice "Not Found grub";

[[ -z "$LinuxMirror" ]] && LinuxMirror="https://mirrors.aliyun.com/debian"

[[ -z "$myPASSWORD" ]] && myPASSWORD='vagrant';

[[ -z "$sDev" ]] && notice "dev not found"

progress "installing..."

info "Auto Mode insatll debian bullseye amd64. "

info "debian bullseye amd64 Downloading..."

run wget --no-check-certificate -qO '/boot/initrd.img' "${LinuxMirror}/dists/bullseye/main/installer-amd64/current/images/netboot/debian-installer/amd64/initrd.gz"
run wget --no-check-certificate -qO '/boot/vmlinuz' "${LinuxMirror}/dists/bullseye/main/installer-amd64/current/images/netboot/debian-installer/amd64/linux"
MirrorHost="$(echo "$LinuxMirror" |awk -F'://|/' '{print $2}')";

DEFAULTNET="$(ip route show |grep -o 'default via [0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.*' |head -n1 |sed 's/proto.*\|onlink.*//g' |awk '{print $NF}')";
[[ -n "$DEFAULTNET" ]] && IPSUB="$(ip addr |grep ''${DEFAULTNET}'' |grep 'global' |grep 'brd' |head -n1 |grep -o '[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}/[0-9]\{1,2\}')";
IPv4="$(echo -n "$IPSUB" |cut -d'/' -f1)";
NETSUB="$(echo -n "$IPSUB" |grep -o '/[0-9]\{1,2\}')";
GATE="$(ip route show |grep -o 'default via [0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}' |head -n1 |grep -o '[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}')";
[[ -n "$NETSUB" ]] && MASK="$(echo -n '128.0.0.0/1,192.0.0.0/2,224.0.0.0/3,240.0.0.0/4,248.0.0.0/5,252.0.0.0/6,254.0.0.0/7,255.0.0.0/8,255.128.0.0/9,255.192.0.0/10,255.224.0.0/11,255.240.0.0/12,255.248.0.0/13,255.252.0.0/14,255.254.0.0/15,255.255.0.0/16,255.255.128.0/17,255.255.192.0/18,255.255.224.0/19,255.255.240.0/20,255.255.248.0/21,255.255.252.0/22,255.255.254.0/23,255.255.255.0/24,255.255.255.128/25,255.255.255.192/26,255.255.255.224/27,255.255.255.240/28,255.255.255.248/29,255.255.255.252/30,255.255.255.254/31,255.255.255.255/32' |grep -o '[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}'${NETSUB}'' |cut -d'/' -f1)";

[[ -n "$GATE" ]] && [[ -n "$MASK" ]] && [[ -n "$IPv4" ]] || {
info "Not found \`ip command\`, It will use \`route command\`."
ipNum() {
  local IFS='.';
  read ip1 ip2 ip3 ip4 <<<"$1";
  echo $((ip1*(1<<24)+ip2*(1<<16)+ip3*(1<<8)+ip4));
}

SelectMax() {
  ii=0;
  for IPITEM in `route -n |awk -v OUT=$1 '{print $OUT}' |grep '[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}'`
    do
      NumTMP="$(ipNum $IPITEM)";
      eval "arrayNum[$ii]='$NumTMP,$IPITEM'";
      ii=$[$ii+1];
    done
  echo ${arrayNum[@]} |sed 's/\s/\n/g' |sort -n -k 1 -t ',' |tail -n1 |cut -d',' -f2;
}

[[ -z $IPv4 ]] && IPv4="$(ifconfig |grep 'Bcast' |head -n1 |grep -o '[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}' |head -n1)";
[[ -z $GATE ]] && GATE="$(SelectMax 2)";
[[ -z $MASK ]] && MASK="$(SelectMax 3)";

  [[ -n "$GATE" ]] && [[ -n "$MASK" ]] && [[ -n "$IPv4" ]] || {
    notice "Error! Not configure network. ";
  }
}

[[ -f '/etc/network/interfaces' ]] && {
  [[ -z "$(sed -n '/iface.*inet static/p' /etc/network/interfaces)" ]] && AutoNet='1' || AutoNet='0';
  [[ -d /etc/network/interfaces.d ]] && {
    ICFGN="$(find /etc/network/interfaces.d -name '*.cfg' |wc -l)" || ICFGN='0';
    [[ "$ICFGN" -ne '0' ]] && {
      for NetCFG in `ls -1 /etc/network/interfaces.d/*.cfg`
        do
          [[ -z "$(cat $NetCFG | sed -n '/iface.*inet static/p')" ]] && AutoNet='1' || AutoNet='0';
          [[ "$AutoNet" -eq '0' ]] && break;
        done
    }
  }
}

[[ -d '/etc/sysconfig/network-scripts' ]] && {
  ICFGN="$(find /etc/sysconfig/network-scripts -name 'ifcfg-*' |grep -v 'lo'|wc -l)" || ICFGN='0';
  [[ "$ICFGN" -ne '0' ]] && {
    for NetCFG in `ls -1 /etc/sysconfig/network-scripts/ifcfg-* |grep -v 'lo$' |grep -v ':[0-9]\{1,\}'`
      do
        [[ -n "$(cat $NetCFG | sed -n '/BOOTPROTO.*[dD][hH][cC][pP]/p')" ]] && AutoNet='1' || {
          AutoNet='0' && . $NetCFG;
          [[ -n $NETMASK ]] && MASK="$NETMASK";
          [[ -n $GATEWAY ]] && GATE="$GATEWAY";
        }
        [[ "$AutoNet" -eq '0' ]] && break;
      done
  }
}


[[ ! -f $GRUBDIR/$GRUBFILE ]] && notice "Not Found $GRUBFILE. "
[[ ! -f $GRUBDIR/$GRUBFILE.old ]] && [[ -f $GRUBDIR/$GRUBFILE.bak ]] && mv -f $GRUBDIR/$GRUBFILE.bak $GRUBDIR/$GRUBFILE.old;
mv -f $GRUBDIR/$GRUBFILE $GRUBDIR/$GRUBFILE.bak;
[[ -f $GRUBDIR/$GRUBFILE.old ]] && cat $GRUBDIR/$GRUBFILE.old >$GRUBDIR/$GRUBFILE || cat $GRUBDIR/$GRUBFILE.bak >$GRUBDIR/$GRUBFILE;

[[ "$GRUBVER" == '0' ]] && {
  READGRUB='/tmp/grub.read'
  cat $GRUBDIR/$GRUBFILE |sed -n '1h;1!H;$g;s/\n/%%%%%%%/g;$p' |grep -om 1 'menuentry\ [^{]*{[^}]*}%%%%%%%' |sed 's/%%%%%%%/\n/g' >$READGRUB
  LoadNum="$(cat $READGRUB |grep -c 'menuentry ')"
  if [[ "$LoadNum" -eq '1' ]]; then
    cat $READGRUB |sed '/^$/d' >/tmp/grub.new;
  elif [[ "$LoadNum" -gt '1' ]]; then
    CFG0="$(awk '/menuentry /{print NR}' $READGRUB|head -n 1)";
    CFG2="$(awk '/menuentry /{print NR}' $READGRUB|head -n 2 |tail -n 1)";
    CFG1="";
    for tmpCFG in `awk '/}/{print NR}' $READGRUB`
      do
        [ "$tmpCFG" -gt "$CFG0" -a "$tmpCFG" -lt "$CFG2" ] && CFG1="$tmpCFG";
      done
    [[ -z "$CFG1" ]] && {
      notice "read $GRUBFILE. ";
    }

    sed -n "$CFG0,$CFG1"p $READGRUB >/tmp/grub.new;
    [[ -f /tmp/grub.new ]] && [[ "$(grep -c '{' /tmp/grub.new)" -eq "$(grep -c '}' /tmp/grub.new)" ]] || {
      notice "Not configure $GRUBFILE."
    }
  fi
  [ ! -f /tmp/grub.new ] && echo "Error! $GRUBFILE. " && exit 1;
  sed -i "/menuentry.*/c\menuentry\ \'Install OS \[bullseye\ amd64\]\'\ --class debian\ --class\ gnu-linux\ --class\ gnu\ --class\ os\ \{" /tmp/grub.new
  sed -i "/echo.*Loading/d" /tmp/grub.new;
  INSERTGRUB="$(awk '/menuentry /{print NR}' $GRUBDIR/$GRUBFILE|head -n 1)"
}

[[ "$GRUBVER" == '1' ]] && {
  CFG0="$(awk '/title[\ ]|title[\t]/{print NR}' $GRUBDIR/$GRUBFILE|head -n 1)";
  CFG1="$(awk '/title[\ ]|title[\t]/{print NR}' $GRUBDIR/$GRUBFILE|head -n 2 |tail -n 1)";
  [[ -n $CFG0 ]] && [ -z $CFG1 -o $CFG1 == $CFG0 ] && sed -n "$CFG0,$"p $GRUBDIR/$GRUBFILE >/tmp/grub.new;
  [[ -n $CFG0 ]] && [ -z $CFG1 -o $CFG1 != $CFG0 ] && sed -n "$CFG0,$[$CFG1-1]"p $GRUBDIR/$GRUBFILE >/tmp/grub.new;
  [[ ! -f /tmp/grub.new ]] && echo "Error! configure append $GRUBFILE. " && exit 1;
  sed -i "/title.*/c\title\ \'Install OS \[bullseye\ amd64\]\'" /tmp/grub.new;
  sed -i '/^#/d' /tmp/grub.new;
  INSERTGRUB="$(awk '/title[\ ]|title[\t]/{print NR}' $GRUBDIR/$GRUBFILE|head -n 1)"
}


[[ -n "$(grep 'linux.*/\|kernel.*/' /tmp/grub.new |awk '{print $2}' |tail -n 1 |grep '^/boot/')" ]] && Type='InBoot' || Type='NoBoot';

LinuxKernel="$(grep 'linux.*/\|kernel.*/' /tmp/grub.new |awk '{print $1}' |head -n 1)";
[[ -z "$LinuxKernel" ]] && notice "read grub config! ";
LinuxIMG="$(grep 'initrd.*/' /tmp/grub.new |awk '{print $1}' |tail -n 1)";
[ -z "$LinuxIMG" ] && sed -i "/$LinuxKernel.*\//a\\\tinitrd\ \/" /tmp/grub.new && LinuxIMG='initrd';

Add_OPTION="$Add_OPTION ipv6.disable_ipv6=1 net.ifnames=0 biosdevname=0";


BOOT_OPTION="auto=true priority=critical $Add_OPTION hostname=debian domain= -- quiet"


[[ "$Type" == 'InBoot' ]] && {
  sed -i "/$LinuxKernel.*\//c\\\t$LinuxKernel\\t\/boot\/vmlinuz $BOOT_OPTION" /tmp/grub.new;
  sed -i "/$LinuxIMG.*\//c\\\t$LinuxIMG\\t\/boot\/initrd.img" /tmp/grub.new;
}

[[ "$Type" == 'NoBoot' ]] && {
  sed -i "/$LinuxKernel.*\//c\\\t$LinuxKernel\\t\/vmlinuz $BOOT_OPTION" /tmp/grub.new;
  sed -i "/$LinuxIMG.*\//c\\\t$LinuxIMG\\t\/initrd.img" /tmp/grub.new;
}

sed -i '$a\\n' /tmp/grub.new;

# [ -f '/etc/network/interfaces' -o -d '/etc/sysconfig/network-scripts' ] || {
#   notice "Not found interfaces config"
# }

sed -i ''${INSERTGRUB}'i\\n' $GRUBDIR/$GRUBFILE;
sed -i ''${INSERTGRUB}'r /tmp/grub.new' $GRUBDIR/$GRUBFILE;
[[ -f  $GRUBDIR/grubenv ]] && sed -i 's/saved_entry/#saved_entry/g' $GRUBDIR/grubenv;


[[ -d /tmp/boot ]] && rm -rf /tmp/boot;
mkdir -p /tmp/boot;
cd /tmp/boot;
COMPTYPE="gzip";
CompDected='0'
for ListCOMP in `echo -en 'gzip\nlzma\nxz'`
  do
    if [[ "$COMPTYPE" == "$ListCOMP" ]]; then
      CompDected='1'
      if [[ "$COMPTYPE" == 'gzip' ]]; then
        NewIMG="initrd.img.gz"
      else
        NewIMG="initrd.img.$COMPTYPE"
      fi
      mv -f "/boot/initrd.img" "/tmp/$NewIMG"
      break;
    fi
  done
[[ "$CompDected" != '1' ]] && notice "Detect compressed type not support.";
[[ "$COMPTYPE" == 'lzma' ]] && UNCOMP='xz --format=lzma --decompress';
[[ "$COMPTYPE" == 'xz' ]] && UNCOMP='xz --decompress';
[[ "$COMPTYPE" == 'gzip' ]] && UNCOMP='gzip -d';

$UNCOMP < /tmp/$NewIMG | cpio --extract --verbose --make-directories --no-absolute-filenames >>/dev/null 2>&1

DNS=$(cat /etc/resolv.conf | grep -E "^nameserver" | head -1 | awk '{print $2}')
[ -z "$DNS" ] && DNS="8.8.8.8"

cat >/tmp/boot/preseed.cfg<<EOF
### localization
d-i debian-installer/locale string en_US
d-i debian-installer/language string en
d-i debian-installer/country string US
d-i debian-installer/locale string en_US.UTF-8
d-i debian-installer/add-kernel-opts string net.ifnames=0 biosdevname=0
d-i localechooser/supported-locales multiselect en_US.UTF-8

### Keyboard selection.
d-i console-tools/archs select at
d-i console-keymaps-at/keymap select us
d-i keyboard-configuration/xkb-keymap select us

### Network configuration
d-i netcfg/choose_interface select auto
d-i netcfg/disable_autoconfig boolean true
d-i netcfg/dhcp_failed note
d-i netcfg/dhcp_options select Configure network manually
d-i netcfg/get_ipaddress string $IPv4
d-i netcfg/get_netmask string $MASK
d-i netcfg/get_gateway string $GATE
d-i netcfg/get_nameservers string $DNS
# d-i netcfg/no_default_route boolean true
d-i netcfg/confirm_static boolean true

### Mirror settings
choose-mirror-bin mirror/http/proxy string
d-i mirror/country string manual
d-i mirror/http/directory string /debian
#d-i mirror/http/hostname string $MirrorHost
d-i mirror/http/hostname string $MirrorHost
d-i mirror/http/proxy string
d-i apt-setup/backports boolean true
d-i apt-setup/services-select multiselect security backports
d-i apt-setup/security_host string $MirrorHost
d-i apt-setup/security_path string /debian
d-i apt-setup/disable-cdrom-entries boolean true

### Account setup
d-i passwd/root-login boolean ture
d-i passwd/make-user boolean false
d-i passwd/root-password password $myPASSWORD
d-i passwd/root-password-again password $myPASSWORD
d-i user-setup/allow-password-weak boolean true
d-i user-setup/encrypt-home boolean false

### Clock and time zone setup
d-i clock-setup/utc boolean true
d-i clock-setup/utc-auto boolean true
d-i clock-setup/ntp boolean true
d-i time/zone string Asia/Shanghai



### Partitioning
d-i partman-auto/disk string $sDev
d-i partman-auto/method string regular
d-i partman-auto/expert_recipe string \
        scheme ::                     \
        512 0 512 ext4                \
                $primary{ }           \
                $bootable{ }          \
                method{ format }      \
                format{ }             \
                use_filesystem{ }     \
                filesystem{ ext4 }    \
                mountpoint{ /boot } . \
        200% 0 200% linux-swap        \
                $primary{ }           \
                method{ swap }        \
                format{ } .           \
        1 0 -1 ext4                   \
                $primary{ }           \
                method{ format }      \
                format{ }             \
                use_filesystem{ }     \
                filesystem{ ext4 }    \
                mountpoint{ / } .
d-i partman-partitioning/confirm_write_new_label boolean true
d-i partman/choose_partition select finish
d-i partman/confirm boolean true
d-i partman/confirm_nooverwrite boolean true
#d-i partman/mount_style select uuid

### Apt setup
d-i apt-setup/cdrom/set-first boolean false
d-i apt-setup/cdrom/set-next boolean false
d-i apt-setup/cdrom/set-failed boolean false
d-i apt-setup/use_mirror boolean true
d-i apt-setup/main boolean true
d-i apt-setup/non-free boolean true
d-i apt-setup/contrib boolean true
d-i apt-setup/local0/repository string https://$MirrorHost/debian/ bullseye-backports main contrib non-free
d-i apt-setup/local0/comment string bullseye backports
apt-mirror-setup apt-setup/use_mirror boolean true

### Package selection
tasksel tasksel/first multiselect standard, server
#d-i pkgsel/include string debconf-utils openssh-server apt-transport-https sudo bzip2 acpid cryptsetup zlib1g-dev wget curl dkms rsync dnsutils make nfs-common net-tools  vim  procps git
d-i pkgsel/include string curl openssh-server sudo sed apt-transport-https net-tools
d-i pkgsel/update-policy select none
d-i pkgsel/upgrade select full-upgrade
d-i pkgsel/install-language-support boolean false
d-i pkgsel/language-packs multiselect en
popularity-contest popularity-contest/participate boolean false

### SSH
openssh-server openssh-server/permit-root-login	boolean	true

### CMD
#d-i	preseed/late_command string \
#    sed -i -e 's/^#\?PasswordAuthentication.*/PasswordAuthentication yes/g' /target/etc/ssh/sshd_config; \
#    sed -i -e 's/^#\?PermitRootLogin.*/PermitRootLogin yes/g' /target/etc/ssh/sshd_config; \
#    apt-install -y linux-image-amd64 -t bullseye-backports; \
#    in-target /usr/bin/apt-get install -y -t bullseye-backports iproute2 htop zsh; \
#    in-target /usr/bin/apt-get remove --purge linux-image-4.9.0-8-amd64 -y;\
#    update-grub; \
#    echo "666" > /target/etc/ysicing

d-i libpam0g/restart-services string cron
d-i libraries/restart-without-asking boolean true

d-i preseed/late_command string                                                   \
        sed -ri 's/^#?PermitRootLogin.*/PermitRootLogin yes/g' /target/etc/ssh/sshd_config; \
        sed -ri 's/^#?PasswordAuthentication.*/PasswordAuthentication yes/g' /target/etc/ssh/sshd_config;


### GRUB
d-i grub-installer/only_debian boolean true
d-i grub-installer/bootdev string default

### Finishing up the installation
d-i finish-install/keep-consoles boolean true
d-i finish-install/reboot_in_progress note


EOF

# sed -i '/netcfg\/disable_autoconfig/d' /tmp/boot/preseed.cfg
# sed -i '/netcfg\/dhcp_options/d' /tmp/boot/preseed.cfg
# sed -i '/netcfg\/get_.*/d' /tmp/boot/preseed.cfg
# sed -i '/netcfg\/confirm_static/d' /tmp/boot/preseed.cfg
sed -i 's/debconf-set\ grub-installer\/bootdev.*\"\;//g' /tmp/boot/preseed.cfg
sed -i '/user-setup\/allow-password-weak/d' /tmp/boot/preseed.cfg
sed -i '/user-setup\/encrypt-home/d' /tmp/boot/preseed.cfg
sed -i '/pkgsel\/update-policy/d' /tmp/boot/preseed.cfg
sed -i 's/umount\ \/media.*true\;\ //g' /tmp/boot/preseed.cfg

sed -i '/anna-install/d' /tmp/boot/preseed.cfg
sed -i 's/wget.*\/sbin\/reboot\;\ //g' /tmp/boot/preseed.cfg

find . | cpio -H newc --create --verbose | gzip -9 > /boot/initrd.img;
rm -rf /tmp/boot;


chown root:root $GRUBDIR/$GRUBFILE
chmod 444 $GRUBDIR/$GRUBFILE

progress "reboot to installing..."
sleep 3 && reboot >/dev/null 2>&1
