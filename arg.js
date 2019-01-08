/*prettier-ignore*/
"use strict";

var getopts = require("getopts")

module.exports = function arg(dot, opts) {
  opts = opts || {}

  if (dot.state.arg) {
    return dot
  }

  dot.state.arg = opts

  dot.any("arg", parseArgs)

  return dot
}

function parseArgs(o) {
  var dot = o.dot,
    opt = o.opt,
    prop = o.prop

  var opts = getopts(opt)

  return dot.set(prop, opts)
}
