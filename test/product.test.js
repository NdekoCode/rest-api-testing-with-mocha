import { expect } from "chai";
import { describe, it } from "mocha";
import { BASE_API } from "../utils/constants.js";
import request from "./setup.test.js";
describe("/FIRST TEST collection", () => {
  it("It should allow me to go to the main page", (done) => {
    request.get(BASE_API).end((err, res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.a("object");
      expect(res.body.message).to.be.equal("Welcome to the MEN RESTFUL APP");
      done();
    });
  });
  it("Should allow me to POST a valid product", (done) => {
    const product = {
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      inStock: true,
    };
    request
      .post(BASE_API + "/products")
      .send(product)
      .then((res) => {
        expect(res.status).to.be.equal(201);
        expect(res.body).to.be.a("array");
        done();
      })
      .catch((err) => {
        done();
        throw err;
      });
  });

  // Help us to check how many product we have in the database
  it("Should verify that we have 1 products in the DB", (done) => {
    request
      .get(BASE_API + "/products")
      .then((res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.a("array").with.lengthOf(1);
        done();
      })
      .catch((err) => {
        done();
        throw err;
      });
  });
});
