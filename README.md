# @dot-event/arg

[dot-event](https://github.com/dot-event/dot-event#readme) CLI and URL arguments

![orbs](orbs.gif)

## Install

```bash
npm install dot-event @dot-event/arg @dot-event/store
```

## Setup

```js
const dot = require("dot-event")()
require("@dot-event/arg")(dot)
require("@dot-event/store")(dot)
```

## Auto-detect arguments

```js
const args = dot.arg() // detects args from `process.argv` or `window.location`
args // { _: ["arg"], opt: true }
```

## Manual arguments

```js
const args = dot.arg({
  args: ["arg", "-o"],
  alias: { o: ["opt"] },
})
args // { _: ["arg"], o: true, opt: true }
```

## Options

| Option | Description                                                     |
| ------ | --------------------------------------------------------------- |
| `save` | Save args to [store](https://github.com/dot-event/store#readme) |

## Credits

This project uses [getopts](https://github.com/jorgebucaran/getopts) for argument parsing.
