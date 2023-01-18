import { should } from "chai";
import { describe, it } from "mocha";
import ClientAsync from "../src/ClientAsync.js";
should();
describe("Client Async", () => {
  const NUMBER_OF_PAGE = 10;
  const client = new ClientAsync(NUMBER_OF_PAGE);
  it("Should allow me to get a page asychronously", (done) => {
    client.getPage(1, (response) => {
      response.header.should.have.property("pageNumber", 1);
      response.header.should.have.property("hasNextPage", true);
      done();
    });
  });
  it("Should tell me when i am on the last page asychronously", (done) => {
    client.getPage(NUMBER_OF_PAGE, (response) => {
      response.header.should.have.property("pageNumber", NUMBER_OF_PAGE);
      response.header.should.have.property("hasNextPage", false);
      done();
    });
  });
  it("Should return me a error if the page does not exist asychronously", (done) => {
    let numberOfCompletedFunc = 0;
    function funcCompleted() {
      numberOfCompletedFunc += 1;
      if (numberOfCompletedFunc === 3) {
        done();
      }
    }
    client.getPage(-99, (response) => {
      response.header.should.have.property("error", "Page does not exist");
      funcCompleted();
    });

    client.getPage(0, (response) => {
      response.header.should.have.property("error", "Page does not exist");
      funcCompleted();
    });

    client.getPage(NUMBER_OF_PAGE + 99, (response) => {
      response.header.should.have.property("error", "Page does not exist");
      funcCompleted();
    });
  });
});
