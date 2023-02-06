import jwt from "jsonwebtoken";
import Alert from "../utils/Alert.js";
export default function verifyAuthMid(req, res, next) {
  const token = req.header("auth-token");
  const alert = new Alert(req, res);
  if (!token) {
    return alert.danger(
      "Vous devez etre connecter pour acceder à cette ressources",
      401
    );
  }
  try {
    const TOKEN_SECRET = process.env.TOKEN_SECRET;
    const verified = jwt.verify(token, TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return alert.danger("Token is not valid");
  }
}
