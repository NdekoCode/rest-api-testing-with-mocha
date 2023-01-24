import ProductModel from "../models/ProductModel.js";
import Alert from "../utils/Alert.js";

export default class ProductsController {
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
      console.log(error);
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
  async getSingleProduct(req, res) {
    const id = req.params.id;
    const alert = new Alert(req, res);
    try {
      const product = await ProductModel.findById(id);
      if (product) {
        return res.status(200).json(product);
      }
      return alert.danger("Ce produit est introuvable", 404);
    } catch (error) {
      return alert.danger(error.message, 500);
    }
  }

  /**
   * Modifie un produits dans la base de données
   *
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  async updateProduct(req, res) {
    const alert = new Alert(req, res);
    const id = req.params.id;
    const bodyRequest = { ...req.body };
    try {
      if (bodyRequest) {
        const product = await ProductModel.findByIdAndUpdate(id, bodyRequest);
        if (product) {
          return alert.success("Product was successfully updated", 201);
        }
        return alert.danger("Erreur lors de la suppression du produit", 500);
      }
    } catch (error) {
      return alert.danger(error.message, 500);
    }
  }

  /**
   * Supprime un produits dans la base de données
   *
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  async deleteProduct(req, res) {
    const id = req.params.id;
    const alert = new Alert(req, res);
    const product = await ProductModel.findByIdAndDelete(id);
    if (product) {
      return alert.success("Article supprimer avec succés", 202);
    }
    return alert.success("Verifier vos information avant suppression", 404);
  }
}
