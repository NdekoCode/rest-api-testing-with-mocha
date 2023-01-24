import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";
import ProductModel from "../models/ProductModel.js";
import { BASE_API } from "../utils/constants.js";
chai.use(chaiHttp);
before((done) => {
  ProductModel.deleteMany({}, (err) => {});
  done();
});
after((done) => {
  ProductModel.deleteMany({}, (err) => {});
  done();
});
describe("/FIRST TEST collection", () => {
  it("It should allow me to go to the main page", (done) => {
    chai
      .request(server)
      .get(BASE_API)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.a("object");
        expect(res.body.message).to.be.equal("Welcome to the MEN RESTFUL APP");
        done();
      });
  });
  // Help us to check how many product we have in the database
  it("Should verify that we have 0 products in the DB", (done) => {
    chai
      .request(server)
      .get(BASE_API + "/products")
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.a("array").with.lengthOf(0);
        done();
      });
  });
});
