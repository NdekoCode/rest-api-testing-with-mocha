export default class ClientAsync {
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
    const hasNextPage = pageNumber < this.numberOfPages;
    return {
      header: {
        pageNumber,
        hasNextPage,
      },
    };
  }
}
