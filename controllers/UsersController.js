import { genSalt, hash } from "bcrypt";
import UserModel from "../models/UserModel.js";
import Alert from "../utils/Alert.js";
import { loginValidation, registerValidation } from "../utils/validation.js";

export default class UsersController {
  async register(req, res) {
    const alert = new Alert(req, res);
    const bodyRequest = req.body;
    // Validate user input(name, email, password)
    const { error } = registerValidation(bodyRequest);
    if (error) {
      alert.setOtherData({ message: error.details[0].message });
      return alert.danger(
        "Erreur survenus lors de l'enregistrement de l'utilisateur"
      );
    }

    // check if the email is already register
    const userExist = await UserModel.findOne({ email: bodyRequest.email });
    if (userExist) {
      return alert.danger("Email already exists");
    }

    try {
      // hash the password
      const salt = await genSalt(14);
      const password = await hash(bodyRequest.password, salt);
      bodyRequest.password = password;

      // create a user objet and save in the DB
      const user = UserModel(bodyRequest);
      await user.save();
      return alert.success("Utilisateur enregister avec success");
    } catch (error) {
      console.log(error);
      return alert.danger(error.message, 500);
    }
  }
  async login(req, res) {
    // Validate user input(name, email, password)
    const alert = new Alert(req, res);
    const bodyRequest = req.body;
    const { error } = loginValidation(bodyRequest);

    // Validate user login info
    if (error) {
      alert.setOtherData({ message: error.details[0].message });
      return alert.danger("Erreur lors de la connexion de l'utilisateur");
    }
    const user = await findOne({ email: bodyRequest.email });
    // throw error if email is wrong (user does not exist in DB)
    if (!user) {
      return alert.danger("Email ou mot de passe incorrect");
    }
    // User exists --- Check if his password is correct
    // create a authentication TOKEN With username, email and id
    // Attach auth token to header
    return alert.success("Utilisateur connecter");
  }
}
