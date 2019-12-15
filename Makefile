BOOK_NAME := devops-handbook
BOOK_OUTPUT := _book
image := ysicing/gitbook-builder
docker := docker run -t -i --sig-proxy=true --rm -v $(shell pwd):/gitbook -w /gitbook -p 4000:4000 $(image)

.PHONY: build
build:
	@$(docker) scripts/gitbook/build-gitbook.sh

.PHONY: install
install:
	@$(docker) gitbook install

.PHONY: serve
serve:
	@$(docker) gitbook serve . $(BOOK_OUTPUT)

.PHONY: clean
clean:
	rm -rf $(BOOK_OUTPUT)

.PHONY: help
help:
	@echo "Help for make"
	@echo "make          - Build the book"
	@echo "make build    - Build the book"
	@echo "make serve    - Serving the book on localhost:4000"
	@echo "make install  - Install gitbook and plugins"
	@echo "make clean    - Remove generated files"
