import Alert from "../utils/Alert.js";

export default class UsersController {
  async register(req, res) {
    const alert = new Alert(req, res);
    return alert.success("Utilisateur enregister");
  }
  async login(req, res) {
    const alert = new Alert(req, res);
    return alert.success("Utilisateur connecter");
  }
}
