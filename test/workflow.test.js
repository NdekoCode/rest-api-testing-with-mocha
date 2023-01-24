import { BASE_API } from "../utils/constants.js";
import request from "./setup.test.js";
describe("User workflow tests", (done) => {
  it("Should Register user + Login, Create product and verify 1 in DATABASE", () => {
    let user = {
      name: "Arick Bulakali",
      email: "arickwalcott@gmail.com",
      password: "123456",
    };
    // 1) Register new User
    request
      .post(BASE_API + "/user/register")
      .send(user)
      .then((res) => {
        expect(res.status).to.be.equal(201);
        expect(res.body).to.be.a("object");
        expect(res.body.alert.error).to.be.equal(null);

        // Login User
        request
          .post(BASE_API + "/user/login")
          .send({
            email: user.email,
            password: user.password,
          })
          .then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body.alert.error).to.be.equal(null);
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        done();
        throw err;
      });
  });
});
