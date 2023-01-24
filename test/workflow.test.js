import { BASE_API } from "../utils/constants.js";
import request from "./setup.test.js";
describe("All workflow User tests", (done) => {
  it("Should Register user + Login, Create product and verify 1 in DATABASE", () => {
    const user = {
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
            const { token } = res.body.alert;
            const product = {
              name: "Hp-840 G3",
              description:
                "A Hp computer with 500GB and 2.7gd with 8 RAM memory",
              price: 340,
              inStock: true,
            };
            request
              .post(BASE_API + "/products")
              .send(product)
              .then((res) => {
                expect(res.status).to.be.equal(201);
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.eql(1);
                const saveProduct = res.body[0];
                expect(saveProduct.title).to.be.equal(product.name);
                expect(saveProduct.description).to.be.equal(
                  product.description
                );
                expect(saveProduct.price).to.be.equal(product.price);
                expect(saveProduct.inStock).to.be.equal(product.inStock);
                request
                  .get(BASE_API + "/products")
                  .then((res) => {
                    expect(res.status).to.be.equal(200);
                    expect(res.body).to.be.a("array");
                    expect(res.body.length).to.be.eql(1);
                    done();
                  })
                  .catch((err) => {
                    done();
                    throw err;
                  });
              })
              .catch((err) => {
                done();
                throw err;
              });
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
