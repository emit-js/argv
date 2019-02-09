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

  args = getopts(args, { alias: alias })

  if (arg && arg.save) {
    return dot.set(prop, args)
  } else {
    return args
  }
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
      args.push(p[1])
    })
  return args
}
