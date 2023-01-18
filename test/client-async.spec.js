import { should } from "chai";
import ClientAsync from "../src/ClientAsync.js";
should();
describe("Client Async", () => {
  const NUMBER_OF_PAGE = 10;
  const client = new ClientAsync(NUMBER_OF_PAGE);
  it("Should allow me to get a page", () => {
    const response = client.getPage(1);
    response.header.should.have.property("pageNumber", 1);
    response.header.should.have.property("hasNextPage", true);
  });
  it("Should tell me when i am on the last page", () => {
    const response = client.getPage(NUMBER_OF_PAGE);
    response.header.should.have.property("pageNumber", NUMBER_OF_PAGE);
    response.header.should.have.property("hasNextPage", false);
  });
  it("Should return me a error if the page does not exist", () => {
    let response = client.getPage(-99);
    response.header.should.have.property("error", "Page does not exist");

    response = client.getPage(0);
    response.header.should.have.property("error", "Page does not exist");

    response = client.getPage(NUMBER_OF_PAGE + 99);
    response.header.should.have.property("error", "Page does not exist");
  });
});
