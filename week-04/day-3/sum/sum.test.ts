'use strict';

import * as test from 'tape';
import { Sum } from "./sum";

test('test the sum function', t => {

  let newList = new Sum();
  let arreyList: number [] = [1,2,3,4,5];

  let actual = newList.sumNumberInList(arreyList);
  let expected = 15;

  t.equal(actual, expected);
  t.end();
});

test('test the sum function in empty arrey', t => {

  let newList = new Sum();
  let arreyList: number [] = [];

  let actual = newList.sumNumberInList(arreyList);
  let expected = 0;

  t.equal(actual, expected);
  t.end();
})

test('test the sum function with one element', t => {

  let newList = new Sum();
  let arreyList: number [] = [1];

  let actual = newList.sumNumberInList(arreyList);
  let expected = 1;

  t.equal(actual, expected);
  t.end();
})

test('test the sum function with null list', t => {

  let newList = new Sum();
  let arreyList: number [] = null;

  let actual = newList.sumNumberInList(arreyList);
  let expected = 0;

  t.equal(actual, expected);
  t.end();
})