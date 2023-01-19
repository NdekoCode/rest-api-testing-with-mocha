export default class MainController {
  home(req, res) {
    return res.status(200).json({
      message: "Welcome to the MEN RESTFUL APP",
    });
  }
}
