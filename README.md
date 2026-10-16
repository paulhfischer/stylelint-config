# stylelint-config

Stylelint-config for projects. It is based on

- [`stylelint-config-standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss) and
- [`stylelint-config-html`](https://github.com/ota-meshi/stylelint-config-html)

and lints CSS-, SCSS-, HTML- and PHP-files. Stylesheets are formatted by
[`prettier-config`](https://github.com/paulhfischer/prettier-config), styles embedded in HTML- and
PHP-files are formatted by
[`@stylistic/stylelint-plugin`](https://github.com/stylelint-stylistic/stylelint-stylistic).

### Usage

#### pre-commit

1. Add the hook to your `.pre-commit-config.yaml`:

    ```yaml
    - repo: https://github.com/paulhfischer/stylelint-config
      rev: v2.0.0
      hooks:
          - id: lint
    ```

2. Add the stylelint configuration to your `.stylelintrc.json` (or the `stylelint`-key of your
   `package.json`):

    ```json
    {
        "extends": ["@paulhfischer/stylelint-config"]
    }
    ```

#### npm

1. Install via `npm`:

    ```
    npm install --save-dev @paulhfischer/stylelint-config
    ```

    _Note: Have a look at the `.pre-commit-hooks.yaml`-file for a list of all peer-dependencies._

2. Add the stylelint configuration to your `.stylelintrc.json` (or the `stylelint`-key of your
   `package.json`):

    ```json
    {
        "extends": ["@paulhfischer/stylelint-config"]
    }
    ```

### Migrating from version 1

- Formatting rules (like `indentation`) were removed from stylelint. Use the prettier hook to
  format stylesheets.
- `.sass`-files (indented syntax) are no longer linted, as stylelint can't parse them.
