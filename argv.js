/*prettier-ignore*/
"use strict";

var getopts = require("getopts")

module.exports = function(emit) {
  if (emit.argv) {
    return
  }

  emit.any("argv", argv)
}

function argv(arg, prop, emit) {
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
    return emit("set", prop, args)
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
