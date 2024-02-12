.PHONY: help
help:
  @echo "help: displays help"
	@echo "restore_prev_manifest: restores the previous manifest.json file"

.PHONY: restore_prev_manifest
restore_prev_manifest:
	@git show others:manifest.json > manifest.json_old