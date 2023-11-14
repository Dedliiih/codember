import test from "node:test"
import assert from "node:assert/strict"
import { miniCompiler } from "./exercise2.js"

test("First Test", () => {
  const result = miniCompiler("##*&*#*#&")
  const expected = "4290"
  assert.equal(result, expected)
})

test("Second Test", () => {
    const result = miniCompiler("*##&*##&")
    const expected = "26"
    assert.equal(result, expected)
})

test("Third Test", () => {
    const result = miniCompiler("###&")
    const expected = "3"
    assert.equal(result, expected)
})