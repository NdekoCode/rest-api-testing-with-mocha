import chai from "chai";
import chaiHttp from "chai-http";
import { before } from "mocha";
import server from "../app.js";
import ProductModel from "../models/ProductModel.js";
chai.use(chaiHttp);
before((done) => {
  ProductModel.deleteMany({}, (err) => {});
  done();
});
after((done) => {
  ProductModel.deleteMany({}, (err) => {});
  done();
});

const request = chai.request(server).keepOpen();
export default request;
