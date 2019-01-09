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

  var alias, args

  if (opt && opt.args) {
    args = opt.args
    alias = opt.alias
  } else {
    args = opt
  }

  if (typeof args === "string") {
    args = urlArgs(args)
  } else if (!Array.isArray(args)) {
    args = processArgs() || urlArgs()
  }

  var opts = getopts(args, { alias: alias })

  return dot.set(prop, opts)
}

function processArgs() {
  if (typeof process === "undefined") {
    return
  }
  return process.argv.slice(2)
}

function urlArgs(url) {
  if (!url && typeof window === "undefined") {
    return
  }
  var args = []
  ;(url || window.location.href)
    .split("?")[1]
    .split("&")
    .forEach(function(p) {
      p = p.split("=")
      args.push("--" + p[0])
      args.push([1])
    })
  return args
}
