/* eslint-env jest */

var arg = require("./arg"),
  dot = require("dot-event")(),
  store = require("@dot-event/store")

beforeEach(function() {
  dot.reset()
  store(dot)
  arg(dot)
})

test("arg from array", function() {
  expect.assertions(1)

  return dot("arg", "test", {
    args: ["a", "-b", "--c=d"],
    save: true,
  }).then(function() {
    expect(dot.get("test")).toEqual({
      _: ["a"],
      b: true,
      c: "d",
    })
  })
})

test("arg from process", function() {
  expect.assertions(1)

  return dot.arg("test", { save: true }).then(function() {
    expect(dot.get("test")).toEqual({ _: [] })
  })
})

test("arg from url", function() {
  expect.assertions(1)

  var promise = dot("arg", "test", {
    args: "http://host?x=1&y=1",
    save: true,
  }).then(function() {
    expect(dot.get("test")).toEqual({ _: [], x: 1, y: 1 })
  })

  global.window = undefined

  return promise
})

test("arg with alias", function() {
  expect.assertions(1)

  return dot("arg", "test", {
    alias: { hi: "hello" },
    args: ["--hi"],
    save: true,
  }).then(function() {
    expect(dot.get("test")).toEqual({
      _: [],
      hello: true,
      hi: true,
    })
  })
})
