import ProductModel from "../models/ProductModel.js";
import Alert from "../utils/Alert.js";

export default class ProductController {
  /**
   * Recupère les produits dans la base de données
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  async #getProductItem(req, res, params = null, filter = null) {
    try {
      const products = await ProductModel.find(params).sort(filter).exec();
      return res.status(200).json(products ? products : []);
    } catch (error) {
      const alert = new Alert(req, res);
      return alert.danger(error.message, 500);
    }
  }

  /**
   * Ajoute un seul produits dans la base de données
   *
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  async postProduct(req, res) {
    const alert = new Alert(req, res);
    const dataRequest = req.body;
    try {
      if (
        typeof dataRequest[Symbol.iterator] === "function" &&
        dataRequest.length > 0
      ) {
        const data = await ProductModel.insertMany(dataRequest);
        return res.status(201).send(data);
      }
      const { title, description } = dataRequest;
      if (title && description) {
        const modelFindProduct = await ProductModel.findOne({
          title,
          description,
        });
        if (modelFindProduct) {
          return alert.danger("Le produit existe déjà", 409);
        }
        const data = await ProductModel.insertMany(dataRequest);
        return res.status(201).send(data);
      }

      return alert.danger("Veuillez remplir ces informations", 401);
    } catch (error) {
      return alert.danger(error.message, 500);
    }
  }

  /**
   * Recupère les produits dans la base de données
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  async getProducts(req, res) {
    return await this.#getProductItem(req, res, null, { createAt: -1 });
  }
  /**
   * Recupère tous les produits en stock dans la base de données
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  async getProductsInStock(req, res) {
    return await this.#getProductItem(
      req,
      res,
      { inStock: true },
      { createAt: -1 }
    );
  }

  /**
   * Recupère un seul produits dans la base de données
   *
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  async getSingleProduct(req, res) {}

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
