#!/bin/bash

command_exists() {
	command -v "$@" > /dev/null 2>&1
}

go::dl(){
    pushd /tmp
    # 下载
    [ -f "go1.20.5.linux-amd64.tar.gz" ] && rm -rf go1.20.5.linux-amd64.tar.gz
    wget https://golang.google.cn/dl/go1.20.5.linux-amd64.tar.gz
    popd
}

go::install(){

	user="$(id -un 2>/dev/null || true)"

    sh_c="sh -c"
    if [ "$user" != "root" ]; then
        if command_exists sudo; then
			sh_c='sudo -E sh -c'
		elif command_exists su; then
			sh_c='su -c'
		else
			cat >&2 <<-'EOF'
			Error: this installer needs the ability to run commands as root.
			We are unable to find either "sudo" or "su" available to make this happen.
			EOF
			exit 1
		fi
    fi

    if command_exists go; then
        $sh_c 'rm -rf /usr/local/go'
    fi
    echo "解压"
    $sh_c 'tar -C /usr/local -xzf /tmp/go1.20.5.linux-amd64.tar.gz'
    echo "配置"
    if command_exists go; then
        [ ! -f "$HOME/.bashrc" ] && (
        cat >> $HOME/.bashrc <<EOF
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
export GOPATH="$HOME/go"
export GOBIN="\$GOPATH/bin"
export PATH=\$PATH:\$GOBIN:/usr/local/go/bin
EOF

        ) || true

        [ ! -f "$HOME/.zshrc" ] && (
        cat >> $HOME/.zshrc <<EOF
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
export GOPATH="$HOME/go"
export GOBIN="\$GOPATH/bin"
export PATH=\$PATH:\$GOBIN:/usr/local/go/bin
EOF
        source $HOME/.zshrc
    ) || true
    fi
    rm -rf /tmp/go1.20.5.linux-amd64.tar.gz
}

go::test(){
    go env
}

go::dl
go::install
go::test
