# @dot-event/argv

[dot-event](https://github.com/dot-event/dot-event#readme) `process.argv` parser

![argv](argv.gif)

## Install

```bash
npm install dot-event @dot-event/argv
```

## Usage

```js
var dot = require("dot-event")()
require("@dot-event/argv")(dot)

var args = dot.argv()
expect(args).toEqual({ _: ["arg"], opt: true })
```

## Options

```js
var args = dot.argv({
  args: ["arg", "-o"],
  alias: { o: ["opt"] },
})
expect(args).toEqual({ _: ["arg"], o: true, opt: true })
```

## Credits

This project uses [getopts](https://github.com/jorgebucaran/getopts) for argument parsing.
