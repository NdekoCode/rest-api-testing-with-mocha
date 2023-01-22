import Alert from "../utils/Alert.js";

export default class UsersController {
  async register(req, res) {
    // Validate user input(name, email, password)
    // check if the email is already register
    // hash the password
    // create a user objet and save in the DB
    const alert = new Alert(req, res);
    return alert.success("Utilisateur enregister");
  }
  async login(req, res) {
    // Validate user input(name, email, password)
    // check if the email is exist in DB
    // verify if the password is correct
    // create a user TOKEN VALIDATION
    const alert = new Alert(req, res);
    return alert.success("Utilisateur connecter");
  }
}
