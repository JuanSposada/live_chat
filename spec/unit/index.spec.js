const index = require('../../index.js');
describe('index', () => {
  it('should return a string', () => {
    expect(index()).toBe('Hello World!');
  });
});

const io = require('socket.io');
describe('io', () => {
  it('should return a string', () => {
    expect(io()).toBe('Hello World!');
  });
});

const app = require('express');
describe('app', () => {
  it('should return a string', () => {
    expect(app()).toBe('Hello World!');
  });
});

const server = require('http');
describe('server', () => {
  it('should return a string', () => {
    expect(server()).toBe('Hello World!');
  });
});