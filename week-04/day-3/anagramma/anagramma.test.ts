'use strict';

import * as test from 'tape';
import { isAnagramma } from "./anagramma";

test('test when its true', t => {
  let actual = isAnagramma('kupa', 'kapu');
  let expected = true;

  t.equal(actual, expected);
  t.end();
});

test('test when its false', t => {
  let actual = isAnagramma('baka', 'peru');
  let expected = false;

  t.equal(actual, expected);
  t.end();
});


test('test when empty strings', t => {
  let firstWord: string = '';
  let secondWord: string = '';

  let actual = isAnagramma(firstWord, secondWord);
  let expected = false;

  t.equal(actual, expected);
  t.end();
});

test('test when strings is null', t => {
  let firstWord: string = null;
  let secondWord: string = null;

  let actual = isAnagramma(firstWord, secondWord);
  let expected = false;

  t.equal(actual, expected);
  t.end();
});

test('test when strings is undifined', t => {
  let firstWord: string = undefined;
  let secondWord: string = undefined;

  let actual = isAnagramma(firstWord, secondWord);
  let expected = false;

  t.equal(actual, expected);
  t.end();
});