import test from "node:test"
import assert from "node:assert/strict"
import { orderedWords } from "./exercise.js"

test("First Test", () => {
  const result = orderedWords("zorro gato alce alce gato zorro")
  const expected = "zorro2gato2alce2"
  assert.equal(result, expected)
})

test("Second Test", () => {
    const result = orderedWords("perro alce gato pez pez gato alce castor lobo perro lobo castor perro alce alce")
    const expected = "perro3alce4gato2pez2castor2lobo2"
    assert.equal(result, expected)
})

test("Third Test", () => {
    const result = orderedWords("alce alce reno lobo raton hamster raton reno alce")
    const expected = "alce3reno2lobo1raton2hamster1"
    assert.equal(result, expected)
})