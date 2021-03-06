var gql = require('../');
var should = require('should');
require('mocha');

describe('all()', function() {
  it('should match with one true condition', function() {
    var truth = function(data) {
      should.exist(data);
      return true;
    };
    var fn = gql.all([truth]);
    fn(123).should.equal(true);
  });
  it('should match with two true conditions', function() {
    var truth = function(data) {
      should.exist(data);
      return true;
    };
    var fn = gql.all([truth, truth]);
    fn(123).should.equal(true);
  });
  it('should not match with one false condition', function() {
    var truth = function(data) {
      should.exist(data);
      return false;
    };
    var fn = gql.all([truth]);
    fn(123).should.equal(false);
  });
  it('should not match with one false and one true condition', function() {
    var truth = function(data) {
      should.exist(data);
      return true;
    };
    var truth2 = function(data) {
      should.exist(data);
      return false;
    };
    var fn = gql.all([truth, truth2]);
    fn(123).should.equal(false);
  });
});