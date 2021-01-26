'use strict';

const request = require('supertest');
const { expect } = require('chai');
const app = require('../routes');

describe('groot endpont', () => {
  it('GET /groot should return transfer', () => {
    request(app)
      .get('/groot')
      .query({ message: 'something' })
      .expect(200)
      .end((err, res) => {
        expect(res.body.translate).to.equal('I am Groot!');
      })
  })
  it('GET /groot should return error', () => {
    request(app)
      .get('/groot')
      .expect(400)
      .end((err, res) => {
        expect(res.body.error).to.equal('I am Groot!')
      })
  })
})

describe('yondu endpoint', () => {
  it('GET /yondu should return object with speed', () => {
    request(app)
      .get('/yondu')
      .query({ distance: 100, time: 10 })
      .expect(200)
      .end((err, res) => {
        expect(res.body.speed).to.equal(10);
      })
  })
  it('GET /yondu should return error teleport', () => {
    request(app)
      .get('/yondu')
      .query({ distance: 100, time: 0 })
      .expect(400)
      .end((err, res) => {
        expect(res.body.error).to.equal('teleport');
      })
  })
  it('GET /yondu should return error ', () => {
    request(app)
      .get('/yondu')
      .expect(400)
      .end((err, res) => {
        expect(res.body.error).to.equal('PLsss, be pretty');
      })
  })
})

describe('rocket endpont', () => {
  it('GET /rocket should return cargo database', () => {
    request(app)
      .get('/rocket')
      .expect(200)
      .end((err, res) => {
        expect(Object.keys(res.body).length).to.equal(5)
      })
  })
})

describe('rocket fill endpont', () =>{
  it('get /rocket/fill return bullet number', () => {
    request(app)
    .get('/rocket/fill')
    .query({caliber: '.50', amount: 5000})
    .expect(200)
    .end((err, res) => {
      expect(res.body).to.deep.equal({caliber: '.50', amount: 5000, shipstatus: '40%', ready: false})
    })
  }) 
})