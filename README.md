# stylelint-config

## Setup

```console
npm install --save-dev @paulhfischer/stylelint-config
```

## Commands

Put this in `.stylelintrc.json`:

```json
{
    "extends": ["@paulhfischer/stylelint-config"]
}
```

```console
npm exec -- paulhfischer-stylelint --fix <PATH>...
```

Lint CSS, SCSS, HTML and PHP. Embedded styles use four-space indentation; use Prettier for
standalone stylesheet formatting. Node 22.13 or a supported newer engine line is required.

### pre-commit

```yaml
- repo: https://github.com/paulhfischer/stylelint-config
  rev: v2.0.0
  hooks:
      - id: lint
```
