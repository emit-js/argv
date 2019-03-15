# @dot-event/argv

[dot-event](https://github.com/dot-event/dot-event#readme) `process.argv` parser

![argv](argv.gif)

## Install

```bash
npm install dot-event @dot-event/argv
```

## Setup

```js
const dot = require("dot-event")()
require("@dot-event/argv")(dot)
require("@dot-event/store")(dot)
```

## Auto-detect arguments

```js
const args = dot.argv() // detects args from `process.argv`
expect(args).toEqual({ _: ["arg"], opt: true })
```

## Manual arguments

```js
const args = dot.argv({
  args: ["arg", "-o"],
  alias: { o: ["opt"] },
})
expect(args).toEqual({ _: ["arg"], o: true, opt: true })
```

## Credits

This project uses [getopts](https://github.com/jorgebucaran/getopts) for argument parsing.
