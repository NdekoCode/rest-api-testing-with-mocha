export default class ProductController {
  /**
   * Recupère les produits dans la base de données
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  async getProducts(req, res) {}

  /**
   * Recupère un seul produits dans la base de données
   *
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  async getSingleProduct(req, res) {}

  /**
   * Ajoute un seul produits dans la base de données
   *
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  async postProduct(req, res) {}

  /**
   * Modifie un produits dans la base de données
   *
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  async updateProduct(req, res) {}

  /**
   * Supprime un produits dans la base de données
   *
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  async deleteProduct(req, res) {}
}
