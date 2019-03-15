/* eslint-env jest */

var dot

beforeEach(function() {
  dot = require("dot-event")()
  require("@dot-event/store")(dot)
  require("./argv")(dot)
})

test("args from array", function() {
  expect.assertions(1)

  return dot("argv", "test", {
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

test("args from process", function() {
  expect.assertions(1)

  return dot.argv("test", { save: true }).then(function() {
    expect(dot.get("test")).toEqual({ _: [] })
  })
})

test("args with alias", function() {
  expect.assertions(1)

  return dot("argv", "test", {
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
