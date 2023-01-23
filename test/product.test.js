import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";
import { BASE_API } from "../utils/constants.js";
chai.use(chaiHttp);
describe("/FIRST Test collection", () => {
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
});
