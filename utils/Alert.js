export default class Alert {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.otherData = {};
  }
  /**
   * @param {object} otherData
   */
  setOtherData(otherData) {
    this.otherData = otherData;
  }
  /**
   * Fait une alerte personnaliser
   *
   * @param {string} message Le message de l'alert
   * @param {Number} statusCode le code status
   * @param {string} type le type d'alerte
   * @returns
   */
  makeAlert(message, statusCode, type) {
    return this.res.status(statusCode).json({
      alert: { message, statusCode, type },
      ...this.otherData,
    });
  }

  /**
   * Alerte de type Danger
   *
   * @param {string} message Le message de l'alert
   * @param {Number} statusCode le code status
   * @param {string} type le type d'alerte
   * @returns
   */
  danger(message, statusCode = 400, type = "danger") {
    return this.makeAlert(message, statusCode, type);
  }

  /**
   * Alerte de success
   *
   * @param {string} message Le message de l'alert
   * @param {Number} statusCode le code status
   * @param {string} type le type d'alerte
   * @returns
   */
  success(message, statusCode = 200, type = "success") {
    return this.makeAlert(message, statusCode, type);
  }

  /**
   * Alerte informative
   *
   * @param {string} message Le message de l'alert
   * @param {Number} statusCode le code status
   * @param {string} type le type d'alerte
   * @returns
   */
  info(message, statusCode = 100, type = "info") {
    return this.makeAlert(message, statusCode, type);
  }

  /**
   * Alerte de signalement
   *
   * @param {string} message Le message de l'alert
   * @param {Number} statusCode le code status
   * @param {string} type le type d'alerte
   * @returns
   */
  warning(message, statusCode = 300, type = "warning") {
    return this.makeAlert(message, statusCode, type);
  }
}
