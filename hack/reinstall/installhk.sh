#!/bin/bash

export tmpVER='amd64'
export tmpDIST='stretch'
export tmpURL=''
export tmpWORD='vagrant'
export tmpMirror=''
export tmpSSL=''
export tmpINS='auto'
export ipAddr=''
export ipMask=''
export ipGate=''
export Relese=''
export ddMode='0'
export setNet='0'
export setRDP='0'
export setIPv6='0'
export isMirror='0'
export FindDists='0'
export loaderMode='0'
export SpikCheckDIST='0'
export setInterfaceName='0'
export UNKNOWHW='0'
export UNVER='6.4'

curl --fail --silent --location -o /tmp/stdlib.sh https://ysicing.me/hack/help/func.sh || {
	curl --fail --silent --location -o /tmp/stdlib.sh https://raw.githubusercontent.com/ysicing/devops-handbook/master/hack/help/func.sh
}

source /tmp/stdlib.sh
rm /tmp/stdlib.sh

while [[ $# -ge 1 ]]; do
  case $1 in
    -v|--ver)
      shift
      tmpVER="$1"
      shift
      ;;
    -d|--debian)
      shift
      Relese='Debian'
      tmpDIST="$1"
      shift
      ;;
    -u|--ubuntu)
      shift
      Relese='Ubuntu'
      tmpDIST="$1"
      shift
      ;;
    -p|--password)
      shift
      myPASSWORD="$1"
      shift
      ;;
    -i|--interface)
      shift
      interface="$1"
      shift
      ;;
    --ip-addr)
      shift
      ipAddr="$1"
      shift
      ;;
    --ip-mask)
      shift
      ipMask="$1"
      shift
      ;;
    --ip-gate)
      shift
      ipGate="$1"
      shift
      ;;
    --dev-net)
      shift
      setInterfaceName='1'
      ;;
    --loader)
      shift
      loaderMode='1'
      ;;
    --prefer)
      shift
      tmpPrefer="$1"
      shift
      ;;
    -a|--auto)
      shift
      tmpINS='auto'
      ;;
    -m|--manual)
      shift
      tmpINS='manual'
      ;;
    -apt|-yum|--mirror)
      shift
      isMirror='1'
      tmpMirror="$1"
      shift
      ;;
    -rdp)
      shift
      setRDP='1'
      WinRemote="$1"
      shift
      ;;
    -ssl)
      shift
      tmpSSL="$1"
      shift
      ;;
    --ipv6)
      shift
      setIPv6='1'
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

function SelectMirror(){
  [ $# -ge 3 ] || exit 1
  Relese="$1"
  DIST=$(echo "$2" |sed 's/\ //g' |sed -r 's/(.*)/\L\1/')
  VER=$(echo "$3" |sed 's/\ //g' |sed -r 's/(.*)/\L\1/')
  New=$(echo "$4" |sed 's/\ //g')
  [ -n "$Relese" ] || exit 1
  [ -n "$DIST" ] || exit 1
  [ -n "$VER" ] || exit 1
  relese=$(echo $Relese |sed -r 's/(.*)/\L\1/')
  if [ "$Relese" == "Debian" ] || [ "$Relese" == "Ubuntu" ]; then
    inUpdate=''; [ "$Relese" == "Ubuntu" ] && inUpdate='-updates'
    MirrorTEMP="SUB_MIRROR/dists/${DIST}${inUpdate}/main/installer-${VER}/current/images/netboot/${relese}-installer/${VER}/initrd.gz"
  elif [ "$Relese" == "CentOS" ]; then
    MirrorTEMP="SUB_MIRROR/${DIST}/os/${VER}/isolinux/initrd.img"
  fi
  [ -n "$MirrorTEMP" ] || exit 1
  MirrorStatus=0
  declare -A MirrorBackup
  MirrorBackup=(["Debian0"]="https://mirrors.tuna.tsinghua.edu.cn/debian" ["Debian1"]="http://deb.debian.org/debian" ["Debian2"]="http://archive.debian.org/debian" ["Ubuntu0"]="" ["Ubuntu1"]="http://archive.ubuntu.com/ubuntu" ["CentOS0"]="" ["CentOS1"]="http://mirror.centos.org/centos" ["CentOS2"]="http://vault.centos.org")
  echo "$New" |grep -q '^http://\|^https://\|^ftp://' && MirrorBackup[${Relese}0]="$New"
  for mirror in $(echo "${!MirrorBackup[@]}" |sed 's/\ /\n/g' |sort -n |grep "^$Relese")
    do
      CurMirror="${MirrorBackup[$mirror]}"
      [ -n "$CurMirror" ] || continue
      MirrorURL=`echo "$MirrorTEMP" |sed "s#SUB_MIRROR#${CurMirror}#g"`
      wget --no-check-certificate --spider --timeout=3 -o /dev/null "$MirrorURL"
      [ $? -eq 0 ] && MirrorStatus=1 && break
    done
  [ $MirrorStatus -eq 1 ] && echo "$CurMirror" || exit 1
}

[ -n "$Relese" ] || Relese='Debian'
linux_relese=$(echo "$Relese" |sed 's/\ //g' |sed -r 's/(.*)/\L\1/')

progress "prepare install"

if [[ "$Relese" == 'Debian' ]] || [[ "$Relese" == 'Ubuntu' ]]; then
  check_dependence wget,awk,grep,sed,cut,cat,cpio,gzip,find,dirname,basename,openssl;
elif [[ "$Relese" == 'CentOS' ]]; then
  check_dependence wget,awk,grep,sed,cut,cat,cpio,gzip,find,dirname,basename,file,xz,openssl;
fi

if [[ "$loaderMode" == "0" ]]; then
  [[ -f '/boot/grub/grub.cfg' ]] && GRUBVER='0' && GRUBDIR='/boot/grub' && GRUBFILE='grub.cfg';
  [[ -z "$GRUBDIR" ]] && [[ -f '/boot/grub2/grub.cfg' ]] && GRUBVER='0' && GRUBDIR='/boot/grub2' && GRUBFILE='grub.cfg';
  [[ -z "$GRUBDIR" ]] && [[ -f '/boot/grub/grub.conf' ]] && GRUBVER='1' && GRUBDIR='/boot/grub' && GRUBFILE='grub.conf';
  [ -z "$GRUBDIR" -o -z "$GRUBFILE" ] && notice "Not Found grub";
else
  tmpINS='auto'
fi

if [[ -n "$tmpVER" ]]; then
  tmpVER="$(echo "$tmpVER" |sed -r 's/(.*)/\L\1/')";
  if  [[ "$tmpVER" == '32' ]] || [[ "$tmpVER" == 'i386' ]] || [[ "$tmpVER" == 'x86' ]]; then
    VER='i386';
  fi
  if  [[ "$tmpVER" == '64' ]] || [[ "$tmpVER" == 'amd64' ]] || [[ "$tmpVER" == 'x86_64' ]] || [[ "$tmpVER" == 'x64' ]]; then
    if [[ "$Relese" == 'Debian' ]] || [[ "$Relese" == 'Ubuntu' ]]; then
      VER='amd64';
    elif [[ "$Relese" == 'CentOS' ]]; then
      VER='x86_64';
    fi
  fi
fi
[ -z "$VER" ] && VER='amd64'

if [[ -z "$tmpDIST" ]]; then
  [ "$Relese" == 'Debian' ] && tmpDIST='stretch' && DIST='stretch';
  [ "$Relese" == 'Ubuntu' ] && tmpDIST='bionic' && DIST='bionic';
  [ "$Relese" == 'CentOS' ] && tmpDIST='6.10' && DIST='6.10';
fi

if [[ -z "$DIST" ]]; then
  if [[ "$Relese" == 'Debian' ]]; then
    SpikCheckDIST='0'
    DIST="$(echo "$tmpDIST" |sed -r 's/(.*)/\L\1/')";
    echo "$DIST" |grep -q '[0-9]';
    [[ $? -eq '0' ]] && {
      isDigital="$(echo "$DIST" |grep -o '[\.0-9]\{1,\}' |sed -n '1h;1!H;$g;s/\n//g;$p' |cut -d'.' -f1)";
      [[ -n $isDigital ]] && {
        [[ "$isDigital" == '9' ]] && DIST='stretch';
        [[ "$isDigital" == '10' ]] && DIST='buster';
      }
    }
    LinuxMirror=$(SelectMirror "$Relese" "$DIST" "$VER" "$tmpMirror")
  fi
  if [[ "$Relese" == 'Ubuntu' ]]; then
    SpikCheckDIST='0'
    DIST="$(echo "$tmpDIST" |sed -r 's/(.*)/\L\1/')";
    echo "$DIST" |grep -q '[0-9]';
    [[ $? -eq '0' ]] && {
      isDigital="$(echo "$DIST" |grep -o '[\.0-9]\{1,\}' |sed -n '1h;1!H;$g;s/\n//g;$p')";
      [[ -n $isDigital ]] && {
        [[ "$isDigital" == '16.04' ]] && DIST='xenial';
        [[ "$isDigital" == '18.04' ]] && DIST='bionic';
      }
    }
    LinuxMirror=$(SelectMirror "$Relese" "$DIST" "$VER" "$tmpMirror")
  fi
  if [[ "$Relese" == 'CentOS' ]]; then
    SpikCheckDIST='1'
    DISTCheck="$(echo "$tmpDIST" |grep -o '[\.0-9]\{1,\}')";
    LinuxMirror=$(SelectMirror "$Relese" "$DISTCheck" "$VER" "$tmpMirror")
    ListDIST="$(wget --no-check-certificate -qO- "$LinuxMirror/dir_sizes" |cut -f2 |grep '^[0-9]')"
    DIST="$(echo "$ListDIST" |grep "^$DISTCheck" |head -n1)"
    [[ -z "$DIST" ]] && {
      notice "The dists version not found in this mirror, Please check it!"
    }
    wget --no-check-certificate -qO- "$LinuxMirror/$DIST/os/$VER/.treeinfo" |grep -q 'general';
    [[ $? != '0' ]] && {
        notice "The version not found in this mirror, Please change mirror try again!"
    }
  fi
fi

if [[ -z "$LinuxMirror" ]]; then
  notice "Invaild mirror"
fi

if [[ "$SpikCheckDIST" == '0' ]]; then
  DistsList="$(wget --no-check-certificate -qO- "$LinuxMirror/dists/" |grep -o 'href=.*/"' |cut -d'"' -f2 |sed '/-\|old\|Debian\|experimental\|stable\|test\|sid\|devel/d' |grep '^[^/]' |sed -n '1h;1!H;$g;s/\n//g;s/\//\;/g;$p')";
  for CheckDEB in `echo "$DistsList" |sed 's/;/\n/g'`
    do
      [[ "$CheckDEB" == "$DIST" ]] && FindDists='1' && break;
    done
  [[ "$FindDists" == '0' ]] && {
    notice "The dists version not found, Please check it!"
  }
fi

[[ -n "$tmpINS" ]] && {
  [[ "$tmpINS" == 'auto' ]] && inVNC='n';
  [[ "$tmpINS" == 'manual' ]] && inVNC='y';
}

[ -n "$ipAddr" ] && [ -n "$ipMask" ] && [ -n "$ipGate" ] && setNet='1';
[[ -z "$myPASSWORD" ]] && myPASSWORD='vagrant';

if [[ -n "$interface" ]]; then
  IFETH="$interface"
else
  if [[ "$linux_relese" == 'centos' ]]; then
    IFETH="link"
  else
    IFETH="auto"
  fi
fi

progress "installing..."

ASKVNC(){
  inVNC='y';
  [[ "$ddMode" == '0' ]] && {
    info "Do you want to install os manually? " "[y/n]"
    read tmpinVNC
    [[ -n "$inVNCtmp" ]] && inVNC="$tmpinVNC"
  }
  [ "$inVNC" == 'y' -o "$inVNC" == 'Y' ] && inVNC='y';
  [ "$inVNC" == 'n' -o "$inVNC" == 'N' ] && inVNC='n';
}

[ "$inVNC" == 'y' -o "$inVNC" == 'n' ] || ASKVNC;
[[ "$ddMode" == '0' ]] && { 
  [[ "$inVNC" == 'y' ]] && info "Manual Mode insatll $Relese $DIST $VER in VNC. "
  [[ "$inVNC" == 'n' ]] && info "Auto Mode insatll $Relese $DIST $VER. "
}

info "$Relese $DIST $VER Downloading..."

if [[ "$linux_relese" == 'debian' ]] || [[ "$linux_relese" == 'ubuntu' ]]; then
  inUpdate=''; [ "$linux_relese" == 'ubuntu' ] && inUpdate='-updates'
  run wget --no-check-certificate -qO '/boot/initrd.img' "${LinuxMirror}/dists/${DIST}${inUpdate}/main/installer-${VER}/current/images/netboot/${linux_relese}-installer/${VER}/initrd.gz"
  run wget --no-check-certificate -qO '/boot/vmlinuz' "${LinuxMirror}/dists/${DIST}${inUpdate}/main/installer-${VER}/current/images/netboot/${linux_relese}-installer/${VER}/linux"
  MirrorHost="$(echo "$LinuxMirror" |awk -F'://|/' '{print $2}')";
  MirrorFolder="$(echo "$LinuxMirror" |awk -F''${MirrorHost}'' '{print $2}')";
else
  notice "not support os"
fi
if [[ "$linux_relese" == 'debian' ]]; then
  run wget --no-check-certificate -qO '/boot/firmware.cpio.gz' "https://mirrors.tuna.tsinghua.edu.cn/debian-nonfree/firmware/${DIST}/current/firmware.cpio.gz"
fi

[[ "$setNet" == '1' ]] && {
  IPv4="$ipAddr";
  MASK="$ipMask";
  GATE="$ipGate";
} || {
  DEFAULTNET="$(ip route show |grep -o 'default via [0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.*' |head -n1 |sed 's/proto.*\|onlink.*//g' |awk '{print $NF}')";
  [[ -n "$DEFAULTNET" ]] && IPSUB="$(ip addr |grep ''${DEFAULTNET}'' |grep 'global' |grep 'brd' |head -n1 |grep -o '[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}/[0-9]\{1,2\}')";
  IPv4="$(echo -n "$IPSUB" |cut -d'/' -f1)";
  NETSUB="$(echo -n "$IPSUB" |grep -o '/[0-9]\{1,2\}')";
  GATE="$(ip route show |grep -o 'default via [0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}' |head -n1 |grep -o '[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}')";
  [[ -n "$NETSUB" ]] && MASK="$(echo -n '128.0.0.0/1,192.0.0.0/2,224.0.0.0/3,240.0.0.0/4,248.0.0.0/5,252.0.0.0/6,254.0.0.0/7,255.0.0.0/8,255.128.0.0/9,255.192.0.0/10,255.224.0.0/11,255.240.0.0/12,255.248.0.0/13,255.252.0.0/14,255.254.0.0/15,255.255.0.0/16,255.255.128.0/17,255.255.192.0/18,255.255.224.0/19,255.255.240.0/20,255.255.248.0/21,255.255.252.0/22,255.255.254.0/23,255.255.255.0/24,255.255.255.128/25,255.255.255.192/26,255.255.255.224/27,255.255.255.240/28,255.255.255.248/29,255.255.255.252/30,255.255.255.254/31,255.255.255.255/32' |grep -o '[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}'${NETSUB}'' |cut -d'/' -f1)";
}

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

[[ "$setNet" != '1' ]] && [[ -f '/etc/network/interfaces' ]] && {
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

[[ "$setNet" != '1' ]] && [[ -d '/etc/sysconfig/network-scripts' ]] && {
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

if [[ "$loaderMode" == "0" ]]; then
  [[ ! -f $GRUBDIR/$GRUBFILE ]] && notice "Not Found $GRUBFILE. "

  [[ ! -f $GRUBDIR/$GRUBFILE.old ]] && [[ -f $GRUBDIR/$GRUBFILE.bak ]] && mv -f $GRUBDIR/$GRUBFILE.bak $GRUBDIR/$GRUBFILE.old;
  mv -f $GRUBDIR/$GRUBFILE $GRUBDIR/$GRUBFILE.bak;
  [[ -f $GRUBDIR/$GRUBFILE.old ]] && cat $GRUBDIR/$GRUBFILE.old >$GRUBDIR/$GRUBFILE || cat $GRUBDIR/$GRUBFILE.bak >$GRUBDIR/$GRUBFILE;
else
  GRUBVER='2'
fi

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
  sed -i "/menuentry.*/c\menuentry\ \'Install OS \[$DIST\ $VER\]\'\ --class debian\ --class\ gnu-linux\ --class\ gnu\ --class\ os\ \{" /tmp/grub.new
  sed -i "/echo.*Loading/d" /tmp/grub.new;
  INSERTGRUB="$(awk '/menuentry /{print NR}' $GRUBDIR/$GRUBFILE|head -n 1)"
}

[[ "$GRUBVER" == '1' ]] && {
  CFG0="$(awk '/title[\ ]|title[\t]/{print NR}' $GRUBDIR/$GRUBFILE|head -n 1)";
  CFG1="$(awk '/title[\ ]|title[\t]/{print NR}' $GRUBDIR/$GRUBFILE|head -n 2 |tail -n 1)";
  [[ -n $CFG0 ]] && [ -z $CFG1 -o $CFG1 == $CFG0 ] && sed -n "$CFG0,$"p $GRUBDIR/$GRUBFILE >/tmp/grub.new;
  [[ -n $CFG0 ]] && [ -z $CFG1 -o $CFG1 != $CFG0 ] && sed -n "$CFG0,$[$CFG1-1]"p $GRUBDIR/$GRUBFILE >/tmp/grub.new;
  [[ ! -f /tmp/grub.new ]] && echo "Error! configure append $GRUBFILE. " && exit 1;
  sed -i "/title.*/c\title\ \'Install OS \[$DIST\ $VER\]\'" /tmp/grub.new;
  sed -i '/^#/d' /tmp/grub.new;
  INSERTGRUB="$(awk '/title[\ ]|title[\t]/{print NR}' $GRUBDIR/$GRUBFILE|head -n 1)"
}

if [[ "$loaderMode" == "0" ]]; then
[[ -n "$(grep 'linux.*/\|kernel.*/' /tmp/grub.new |awk '{print $2}' |tail -n 1 |grep '^/boot/')" ]] && Type='InBoot' || Type='NoBoot';

LinuxKernel="$(grep 'linux.*/\|kernel.*/' /tmp/grub.new |awk '{print $1}' |head -n 1)";
[[ -z "$LinuxKernel" ]] && notice "read grub config! ";
LinuxIMG="$(grep 'initrd.*/' /tmp/grub.new |awk '{print $1}' |tail -n 1)";
[ -z "$LinuxIMG" ] && sed -i "/$LinuxKernel.*\//a\\\tinitrd\ \/" /tmp/grub.new && LinuxIMG='initrd';

if [[ "$setInterfaceName" == "1" ]]; then
  Add_OPTION="net.ifnames=0 biosdevname=0";
else
  Add_OPTION="";
fi

if [[ "$setIPv6" == "1" ]]; then
  Add_OPTION="$Add_OPTION ipv6.disable=1";
fi

if [[ "$linux_relese" == 'debian' ]] || [[ "$linux_relese" == 'ubuntu' ]]; then
  BOOT_OPTION="auto=true $Add_OPTION hostname=$linux_relese domain= -- quiet"
fi

[[ "$Type" == 'InBoot' ]] && {
  sed -i "/$LinuxKernel.*\//c\\\t$LinuxKernel\\t\/boot\/vmlinuz $BOOT_OPTION" /tmp/grub.new;
  sed -i "/$LinuxIMG.*\//c\\\t$LinuxIMG\\t\/boot\/initrd.img" /tmp/grub.new;
}

[[ "$Type" == 'NoBoot' ]] && {
  sed -i "/$LinuxKernel.*\//c\\\t$LinuxKernel\\t\/vmlinuz $BOOT_OPTION" /tmp/grub.new;
  sed -i "/$LinuxIMG.*\//c\\\t$LinuxIMG\\t\/initrd.img" /tmp/grub.new;
}

sed -i '$a\\n' /tmp/grub.new;
fi

[[ "$inVNC" == 'n' ]] && {
GRUBPATCH='0';

if [[ "$loaderMode" == "0" ]]; then
[ -f '/etc/network/interfaces' -o -d '/etc/sysconfig/network-scripts' ] || {
  notice "Not found interfaces config"
}

sed -i ''${INSERTGRUB}'i\\n' $GRUBDIR/$GRUBFILE;
sed -i ''${INSERTGRUB}'r /tmp/grub.new' $GRUBDIR/$GRUBFILE;
[[ -f  $GRUBDIR/grubenv ]] && sed -i 's/saved_entry/#saved_entry/g' $GRUBDIR/grubenv;
fi

[[ -d /tmp/boot ]] && rm -rf /tmp/boot;
mkdir -p /tmp/boot;
cd /tmp/boot;
if [[ "$linux_relese" == 'debian' ]] || [[ "$linux_relese" == 'ubuntu' ]]; then
  COMPTYPE="gzip";
fi
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

if [[ "$linux_relese" == 'debian' ]] || [[ "$linux_relese" == 'ubuntu' ]]; then
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
d-i console-setup/layoutcode string us

### Network configuration
d-i netcfg/choose_interface select $IFETH
d-i netcfg/disable_autoconfig boolean true
d-i netcfg/dhcp_failed note
d-i netcfg/dhcp_options select Configure network manually
d-i netcfg/get_ipaddress string $IPv4
d-i netcfg/get_netmask string $MASK
d-i netcfg/get_gateway string $GATE
d-i netcfg/get_nameservers string 8.8.8.8
d-i netcfg/no_default_route boolean true
d-i netcfg/confirm_static boolean true

d-i hw-detect/load_firmware boolean true

### Mirror settings
choose-mirror-bin mirror/http/proxy string
d-i mirror/country string manual
d-i mirror/http/directory string /debian
#d-i mirror/http/hostname string mirrors.aliyun.com
d-i mirror/http/hostname string mirrors.tuna.tsinghua.edu.cn
d-i mirror/http/proxy string
d-i apt-setup/backports boolean true
d-i apt-setup/services-select multiselect security backports
d-i apt-setup/security_host string mirrors.tuna.tsinghua.edu.cn
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
d-i partman-auto/disk string /dev/sdb
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
d-i apt-setup/local0/repository string http://mirror.xtom.com.hk/debian/ stretch-backports main contrib non-free
d-i apt-setup/local0/comment string stretch backports
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
#    apt-install -y linux-image-amd64 -t stretch-backports; \
#    in-target /usr/bin/apt-get install -y -t stretch-backports iproute2 htop zsh; \
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

[[ "$loaderMode" != "0" ]] && AutoNet='1'

[[ "$setNet" == '0' ]] && [[ "$AutoNet" == '1' ]] && {
  sed -i '/netcfg\/disable_autoconfig/d' /tmp/boot/preseed.cfg
  sed -i '/netcfg\/dhcp_options/d' /tmp/boot/preseed.cfg
  sed -i '/netcfg\/get_.*/d' /tmp/boot/preseed.cfg
  sed -i '/netcfg\/confirm_static/d' /tmp/boot/preseed.cfg
}

[[ "$DIST" == 'trusty' ]] && GRUBPATCH='1'
[[ "$DIST" == 'wily' ]] && GRUBPATCH='1'
[[ "$DIST" == 'xenial' ]] && {
  sed -i 's/^d-i\ clock-setup\/ntp\ boolean\ true/d-i\ clock-setup\/ntp\ boolean\ false/g' /tmp/boot/preseed.cfg
}

[[ "$GRUBPATCH" == '1' ]] && {
  sed -i 's/^d-i\ grub-installer\/bootdev\ string\ default//g' /tmp/boot/preseed.cfg
}
[[ "$GRUBPATCH" == '0' ]] && {
  sed -i 's/debconf-set\ grub-installer\/bootdev.*\"\;//g' /tmp/boot/preseed.cfg
}

[[ "$linux_relese" == 'debian' ]] && {
  sed -i '/user-setup\/allow-password-weak/d' /tmp/boot/preseed.cfg
  sed -i '/user-setup\/encrypt-home/d' /tmp/boot/preseed.cfg
  sed -i '/pkgsel\/update-policy/d' /tmp/boot/preseed.cfg
  sed -i 's/umount\ \/media.*true\;\ //g' /tmp/boot/preseed.cfg
}
[[ "$linux_relese" == 'debian' ]] && [[ -f '/boot/firmware.cpio.gz' ]] && {
  gzip -d < /boot/firmware.cpio.gz | cpio --extract --verbose --make-directories --no-absolute-filenames >>/dev/null 2>&1
}

[[ "$ddMode" == '0' ]] && {
  sed -i '/anna-install/d' /tmp/boot/preseed.cfg
  sed -i 's/wget.*\/sbin\/reboot\;\ //g' /tmp/boot/preseed.cfg
}
fi

find . | cpio -H newc --create --verbose | gzip -9 > /boot/initrd.img;
rm -rf /tmp/boot;
}

[[ "$inVNC" == 'y' ]] && {
  sed -i '$i\\n' $GRUBDIR/$GRUBFILE
  sed -i '$r /tmp/grub.new' $GRUBDIR/$GRUBFILE
  info "It will reboot! Please connect VNC! Select Install OS [$DIST $VER] to install system. There is some information for you. DO NOT CLOSE THE WINDOW!"
  info "IPv4" "$IPv4"
  info "NETMASK" "$MASK"
  info "GATEWAY" "$GATE"

  read -n 1 -p "Press Enter to reboot..." INP
  [[ "$INP" != '' ]] && echo -ne '\b \n\n';
}

chown root:root $GRUBDIR/$GRUBFILE
chmod 444 $GRUBDIR/$GRUBFILE

if [[ "$loaderMode" == "0" ]]; then
  sleep 3 && reboot >/dev/null 2>&1
else
  rm -rf "$HOME/loader"
  mkdir -p "$HOME/loader"
  cp -rf "/boot/initrd.img" "$HOME/loader/initrd.img"
  cp -rf "/boot/vmlinuz" "$HOME/loader/vmlinuz"
  [[ -f "/boot/initrd.img" ]] && rm -rf "/boot/initrd.img"
  [[ -f "/boot/vmlinuz" ]] && rm -rf "/boot/vmlinuz"
  echo && ls -AR1 "$HOME/loader"
fi
