export default class ClientAsync {
  constructor(numberOfPages) {
    this.numberOfPages = numberOfPages;
  }
  #getPageData(pageNumber) {
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
  getPage(pageNumber, cbPageIsAvailable) {
    const delay = parseInt(Math.random() * 1000);
    setTimeout(() => {
      cbPageIsAvailable(this.#getPageData(pageNumber));
    }, delay);
  }
}
