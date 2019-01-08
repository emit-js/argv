/* eslint-env jest */

var arg = require("./arg"),
  dot = require("dot-event")(),
  store = require("@dot-event/store")

beforeEach(function() {
  dot.reset()
  store(dot)
  arg(dot)
})

test("arg", function() {
  expect.assertions(1)

  return dot("arg.test", ["a", "-b", "--c=d"]).then(
    function() {
      expect(dot.get("test")).toEqual({
        _: ["a"],
        b: true,
        c: "d",
      })
    }
  )
})
