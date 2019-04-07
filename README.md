# @emit-js/argv

[emit](https://github.com/emit-js/emit#readme) `process.argv` parser

![argv](argv.gif)

## Install

```bash
npm install @emit-js/emit @emit-js/argv
```

## Usage

```js
var emit = require("@emit-js/emit")()
require("@emit-js/argv")(emit)

var args = emit.argv()
expect(args).toEqual({ _: ["arg"], opt: true })
```

## Options

```js
var args = emit.argv({
  args: ["arg", "-o"],
  alias: { o: ["opt"] },
})
expect(args).toEqual({ _: ["arg"], o: true, opt: true })
```

## Credits

This project uses [getopts](https://github.com/jorgebucaran/getopts) for argument parsing.
