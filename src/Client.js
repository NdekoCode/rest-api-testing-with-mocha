export default class Client {
  constructor(numberOfPages) {
    this.numberOfPages = numberOfPages;
  }
  getPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > this.numberOfPages) {
      return {
        header: {
          error: "Page does not exist",
        },
      };
    }
  }
}
