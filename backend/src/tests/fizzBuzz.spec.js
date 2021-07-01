const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

chai.use(chaiHttp);
chai.should();

describe("POST /fizzBuzz/:number/fizzBuzz/:number", () => {
  it("Show error if not number is given", done => {
    chai
      .request(server)
      .post("/fizzBuzz/five")
      .end((err, res) => {
        res.should.have.status(400);
        res.text.should.be.eql("To play FizzBuzz you must enter an integer");
        done();
      });
  });

  it("Show given number if given number can`t be divided by 3 or 5", done => {
    chai
      .request(server)
      .post("/fizzBuzz/7")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.eql("7");
        done();
      });
  });

  it("Show Fizz if given number can be divided by 3", done => {
    chai
      .request(server)
      .post("/fizzBuzz/6")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.eql("Fizz");
        done();
      });
  });

  it("Show Buzz if given number can be divided by 5", done => {
    chai
      .request(server)
      .post("/fizzBuzz/10")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.eql("Buzz");
        done();
      });
  });

  it("Show Buzz if given number can be divided by 3 and 5", done => {
    chai
      .request(server)
      .post("/fizzBuzz/15")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.eql("FizzBuzz");
        done();
      });
  });
});
