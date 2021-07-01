const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

chai.use(chaiHttp);
chai.should();

describe("GET /todo/:id", () => {
  it("Show error if given ID is not an integer", done => {
    chai
      .request(server)
      .get("/todo/five")
      .end((err, res) => {
        res.should.have.status(400);
        res.text.should.be.eql("ID must be an integer");
        done();
      });
  });

  it("Show error if no todo found with given ID", done => {
    chai
      .request(server)
      .get("/todo/500")
      .end((err, res) => {
        res.should.have.status(404);
        res.text.should.be.eql("There is no ToDo list with such ID");
        done();
      });
  });

  it("Show ToDo task that matches given ID", done => {
    chai
      .request(server)
      .get("/todo/0")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("title");
        res.body.should.have.property("created");
        done();
      });
  });
});

describe("POST /todo/", () => {
  it("Do not allow to add empty ToDo", done => {
    const toDo = {
      title: "",
    };
    chai
      .request(server)
      .post("/todo/")
      .send(toDo)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        res.body.should.not.have.property("newToDo");
        res.text.should.be.eql("You must enter a title to add a 'ToDo' task.");
        done();
      });
  });

  it("Create new ToDo list when title is given", done => {
    const toDo = {
      title: "Finish writing tests",
    };
    chai
      .request(server)
      .post("/todo/")
      .send(toDo)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.newToDo.should.have.property("title");
        res.body.newToDo.should.have.property("created");
        res.body.should.have
          .property("message")
          .eql(
            `A new Todo task "Finish writing tests" has been succesfully added.`
          );
        done();
      });
  });
});
