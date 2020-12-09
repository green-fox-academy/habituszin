'use strict';

import * as test from 'tape';
import { countLetters } from "./count-letter";

test('test if input string is empty', t => {
  let testString: string = ''
  let actual = countLetters(testString);
  let expected = {};

  t.deepEqual(actual, expected);
  t.end();
})

test('test if input string is null', t => {
  let testString: string = null
  let actual = countLetters(testString);
  let expected = {};

  t.deepEqual(actual, expected);
  t.end();
})

test('test if input string is undifined', t => {
  let testString: string = undefined
  let actual = countLetters(testString);
  let expected = {};

  t.deepEqual(actual, expected);
  t.end();
})