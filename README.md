# stylelint-config

Stylelint-config for projects.

### Usage

1. Install via `npm`:

    ```
    npm install --save-dev @paulhfischer/stylelint-config --engine-strict
    ```

    _Note: The installation requires `npm` version 7 or higher (otherwise peer dependencies aren't installed automatically). Have a look at the `.pre-commit-hooks.yaml`-file for a list of all peer-dependencies._

2. Add the stylelint configuration to your stylelint-config:

    ```json
    {
        "extends": ["@paulhfischer/stylelint-config"]
    }
    ```
