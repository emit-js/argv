# @dot-event/arg

[dot-event](https://github.com/dot-event/dot-event2#readme) CLI and URL arguments

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
dot.arg("myArgs") // detects args from `process.argv` or `window.location`
dot.get("myArgs") // { _: ["arg"], opt: true }
```

## Manual arguments

```js
dot.arg("myArgs", {
  args: ["arg", "-o"],
  alias: { o: ["opt"] },
})
dot.get("myArgs") // { _: ["arg"], o: true, opt: true }
```

## Credits

This project uses [getopts](https://github.com/jorgebucaran/getopts) for argument parsing.
