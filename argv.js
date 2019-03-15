/*prettier-ignore*/
"use strict";

var getopts = require("getopts")

module.exports = function(dot) {
  if (dot.arg) {
    return
  }

  dot.any("argv", argv)
}

function argv(prop, arg, dot) {
  var alias, args

  if (arg) {
    args = arg.args
    alias = arg.alias
  }

  if (!Array.isArray(args)) {
    args = processArgv()
  }

  args = getopts(args, { alias: alias })

  if (arg && arg.save) {
    return dot("set", prop, args)
  } else {
    return args
  }
}

function processArgv() {
  if (typeof process === "undefined") {
    return
  }
  return process.argv.slice(2)
}
