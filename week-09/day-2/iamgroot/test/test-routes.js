'use strict';

const request = require('supertest');
const { expect } = require('chai');
const app = require('../routes');

describe('groot endpont', () => {
  it('GET /groot should return transfer', () => {
    request(app)
    .get('/groot')
    .query({message: 'something'})
    .expect(200)
    .end((err,res) => {
      expect(err).to.be.null;
      expect(res.body.translate).to.equal('I am Groot!');
    })
  })
  it('GET /groot should return error', () => {
    request(app)
    .get('/groot')
    .expect(400)
    .end((err,res) => {
      expect(err).to.be.null;
      expect(res.body.error).to.equal('I am Groot!')
    })
  })
})
