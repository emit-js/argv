/* eslint-env jest */

var emit

beforeEach(function() {
  emit = require("@emit-js/emit")()
  require("@emit-js/store")(emit)
  require("./argv")(emit)
})

test("args from array", function() {
  expect.assertions(1)

  return emit("argv", "test", {
    args: ["a", "-b", "--c=d"],
    save: true,
  }).then(function() {
    expect(emit.get("test")).toEqual({
      _: ["a"],
      b: true,
      c: "d",
    })
  })
})

test("args from process", function() {
  expect.assertions(1)

  return emit.argv("test", { save: true }).then(function() {
    expect(emit.get("test")).toEqual({ _: [] })
  })
})

test("args with alias", function() {
  expect.assertions(1)

  return emit("argv", "test", {
    alias: { hi: "hello" },
    args: ["--hi"],
    save: true,
  }).then(function() {
    expect(emit.get("test")).toEqual({
      _: [],
      hello: true,
      hi: true,
    })
  })
})
