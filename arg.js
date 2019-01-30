/*prettier-ignore*/
"use strict";

var getopts = require("getopts")

module.exports = function arg(dot, opts) {
  if (dot.state.arg) {
    return
  }

  opts = opts || {}
  dot.state.arg = opts

  dot.any("arg", parseArgs)
}

function parseArgs(prop, arg, dot) {
  var alias, args

  if (arg) {
    args = arg.args
    alias = arg.alias
  }

  if (typeof args === "string") {
    args = urlArgs(args)
  } else if (!Array.isArray(args)) {
    args = processArgs() || urlArgs()
  }

  return dot.set(prop, getopts(args, { alias: alias }))
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
