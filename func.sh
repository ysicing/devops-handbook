#!/bin/bash

[ -z "${UID}" ] && UID="$(id -u)"

setup_terminal() {
	TPUT_RESET=""
	TPUT_BLACK=""
	TPUT_RED=""
	TPUT_GREEN=""
	TPUT_YELLOW=""
	TPUT_BLUE=""
	TPUT_PURPLE=""
	TPUT_CYAN=""
	TPUT_WHITE=""
	TPUT_BGBLACK=""
	TPUT_BGRED=""
	TPUT_BGGREEN=""
	TPUT_BGYELLOW=""
	TPUT_BGBLUE=""
	TPUT_BGPURPLE=""
	TPUT_BGCYAN=""
	TPUT_BGWHITE=""
	TPUT_BOLD=""
	TPUT_DIM=""
	TPUT_UNDERLINED=""
	TPUT_BLINK=""
	TPUT_INVERTED=""
	TPUT_STANDOUT=""
	TPUT_BELL=""
	TPUT_CLEAR=""

	# Is stderr on the terminal? If not, then fail
	test -t 2 || return 1

	if command -v tput 1>/dev/null 2>&1; then
		if [ $(($(tput colors 2>/dev/null))) -ge 8 ]; then
			# Enable colors
			TPUT_RESET="$(tput sgr 0)"
			TPUT_BLACK="$(tput setaf 0)"
			TPUT_RED="$(tput setaf 1)"
			TPUT_GREEN="$(tput setaf 2)"
			TPUT_YELLOW="$(tput setaf 3)"
			TPUT_BLUE="$(tput setaf 4)"
			TPUT_PURPLE="$(tput setaf 5)"
			TPUT_CYAN="$(tput setaf 6)"
			TPUT_WHITE="$(tput setaf 7)"
			TPUT_BGBLACK="$(tput setab 0)"
			TPUT_BGRED="$(tput setab 1)"
			TPUT_BGGREEN="$(tput setab 2)"
			TPUT_BGYELLOW="$(tput setab 3)"
			TPUT_BGBLUE="$(tput setab 4)"
			TPUT_BGPURPLE="$(tput setab 5)"
			TPUT_BGCYAN="$(tput setab 6)"
			TPUT_BGWHITE="$(tput setab 7)"
			TPUT_BOLD="$(tput bold)"
			TPUT_DIM="$(tput dim)"
			TPUT_UNDERLINED="$(tput smul)"
			TPUT_BLINK="$(tput blink)"
			TPUT_INVERTED="$(tput rev)"
			TPUT_STANDOUT="$(tput smso)"
			TPUT_BELL="$(tput bel)"
			TPUT_CLEAR="$(tput clear)"
		fi
	fi

	return 0
}
setup_terminal || echo >/dev/null

progress() {
	echo >&2 " --- ${TPUT_DIM}${TPUT_BOLD}${*}${TPUT_RESET} --- "
}

fatal() {
	printf >&2 "${TPUT_BGRED}${TPUT_WHITE}${TPUT_BOLD} ABORTED ${TPUT_RESET} ${*} \n\n"
	exit 1
}

run_ok() {
	printf >&2 "${TPUT_BGGREEN}${TPUT_WHITE}${TPUT_BOLD} OK ${TPUT_RESET} ${*} \n\n"
}

run_failed() {
	printf >&2 "${TPUT_BGRED}${TPUT_WHITE}${TPUT_BOLD} FAILED ${TPUT_RESET} ${*} \n\n"
}

info() {
	echo >&2 " > ${TPUT_WHITE}${TPUT_BOLD} ${1} ${TPUT_RESET} ${TPUT_GREEN}${2}${TPUT_RESET} "
}

notice() {
	printf >&2 "${TPUT_BGRED}${TPUT_WHITE}${TPUT_BOLD} !!! ${TPUT_RESET} ${*} \n\n"
	exit 1
}

ESCAPED_PRINT_METHOD=
printf "%q " test >/dev/null 2>&1
[ $? -eq 0 ] && ESCAPED_PRINT_METHOD="printfq"
escaped_print() {
	if [ "${ESCAPED_PRINT_METHOD}" = "printfq" ]; then
		printf "%q " "${@}"
	else
		printf "%s" "${*}"
	fi
	return 0
}

run_logfile="/dev/null"
run() {
	local user="${USER--}" dir="${PWD}" info info_console

	if [ "${UID}" = "0" ]; then
		info="[root ${dir}]# "
		info_console="[${TPUT_DIM}${dir}${TPUT_RESET}]# "
	else
		info="[${user} ${dir}]$ "
		info_console="[${TPUT_DIM}${dir}${TPUT_RESET}]$ "
	fi

	printf >>"${run_logfile}" "${info}"
	escaped_print >>"${run_logfile}" "${@}"
	printf >>"${run_logfile}" " ... "

	printf >&2 "${info_console}${TPUT_BOLD}${TPUT_YELLOW}"
	escaped_print >&2 "${@}"
	printf >&2 "${TPUT_RESET}\n"

	"${@}"

	local ret=$?
	if [ ${ret} -ne 0 ]; then
		run_failed
		printf >>"${run_logfile}" "FAILED with exit code ${ret}\n"
	else
		run_ok
		printf >>"${run_logfile}" "OK\n"
	fi

	return ${ret}
}

command_exists() {
	command -v "$@" > /dev/null 2>&1
}

get_distribution() {
	lsb_dist=""
	
	if [ -r /etc/os-release ]; then
		lsb_dist="$(. /etc/os-release && echo "$ID")"
	fi
	echo "$lsb_dist"
}

lsb_dist=$( get_distribution )
lsb_dist="$(echo "$lsb_dist" | tr '[:upper:]' '[:lower:]')"