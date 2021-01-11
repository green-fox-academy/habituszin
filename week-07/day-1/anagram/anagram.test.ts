'use strict';

import * as test from 'tape';
import { anagramChecker } from './anagram';

test('Check empty values and return false', t => {
  const actual = anagramChecker('', '');
  const expected = false;

  t.equal(actual, expected);
  t.end();
});

test('Check undefined values and return false', t => {
  const actual = anagramChecker(undefined, 'kacsa');
  const expected = false;

  t.equal(actual, expected);
  t.end();
});

test('Check null values and return false', t => {
  const actual = anagramChecker(null, 'kacsa');
  const expected = false;

  t.equal(actual, expected);
  t.end();
});

test('should return true if two strings are anagram', t => {
  let inputString1: string = 'asdf';
  let inputString2: string = 'fsda';

  let actual = anagramChecker(inputString1, inputString2);
  let expected = true;

  t.equal(actual, expected);
  t.end();
});

test('should return false if two strings are not anagram', t => {
  let inputString1: string = 'alma';
  let inputString2: string = 'fsda';

  let actual = anagramChecker(inputString1, inputString2);
  let expected = false;

  t.equal(actual, expected);
  t.end();
});
