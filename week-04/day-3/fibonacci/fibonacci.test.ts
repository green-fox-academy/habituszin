'use strict';

import * as test from 'tape';
import { calcFibonacciElement } from "./fibonacci";

test('test when n is under 0', t => {
  let n: number = -4;
  let actual = calcFibonacciElement(n);
  let extend = 0;

  t.equal(actual, extend);
  t.end();
})

test('test when n null', t => {
  let n: number = null;
  let actual = calcFibonacciElement(n);
  let extend = 0;

  t.equal(actual, extend);
  t.end();
})

test('test when n is undifined', t => {
  let n: number = undefined;
  let actual = calcFibonacciElement(n);
  let extend = 0;

  t.equal(actual, extend);
  t.end();
})

test('test when n is empty', t => {
  let n: number;
  let actual = calcFibonacciElement(n);
  let extend = 0;

  t.equal(actual, extend);
  t.end();
})